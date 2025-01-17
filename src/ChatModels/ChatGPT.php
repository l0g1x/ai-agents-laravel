<?php

namespace Adrenallen\AiAgentsLaravel\ChatModels;

use OpenAI;
use Yethee\Tiktoken\EncoderProvider;

use Adrenallen\AiAgentsLaravel\Agents\AgentFunction;

class ChatGPT extends AbstractChatModel {

    private $model;
    private $client;

    // class constructor
    public function __construct($model = 'gpt-3.5-turbo', $context = []) {
        $this->model = $model;
        $this->client = OpenAI::client(config('openai.api_key'));
        $this->context = $context;
    }

    /**
     * sends a "user" roled message to the model
     *
     * @param [type] $message
     */
    public function sendUserMessage($message): ChatModelResponse {
        return $this->sendMessage(['role' => 'user', 'content' => $message]);
    }

    /**
     * Sends a function result to the model
     *
     * @param string $functionName
     * @param [type] $result
     */
    public function sendFunctionResult(string $functionName, $result): ChatModelResponse {
        $convertedResult = $result;

        if (is_array($result)) {
            $convertedResult = json_encode($result);
        }
        return $this->sendMessage(['role' => 'function', 'name' => $functionName, 'content' => (string)$convertedResult]);
    }

    /**
     * sends a "system" roled message to the model
     *
     * @param [type] $message
     */
    public function sendSystemMessage($message): ChatModelResponse {
        return $this->sendMessage(['role' => 'system', 'content' => $message]);
    }

    /**
     * sends a message to the open ai model and returns the message result
     *
     * @param [type] $messageObj
     */
    protected function sendMessage($messageObj) : ChatModelResponse{
        $options = [
            'model' => $this->model,
            'messages' => $this->getTokenLimitedContext([
                ...$this->context,
                $messageObj,
            ])
        ];

        if (count($this->functions) > 0) {
            $options['functions'] = $this->functions;
        }

        $result = $this->client->chat()->create($options);

        $response = $result->choices[0]->message;

        $this->recordContext($messageObj);
        $this->recordContext($response->toArray());

        
        // TODO - check if the $result->finishReason == `function_call` and if so then
        // pass in the function call, otherwise dont?
        return new ChatModelResponse($response->content, (array) $response->functionCall, null, ['usage' => $result->usage]);
    }

    // Just record this as the first message in the context
    // so that the bot understands but doesnt have to respond
    public function setPrePrompt(string $message) {
        $this->recordContext(
            ['role' => 'system', 'content' => $message]
        );
    }

    /*
    * Converts a function from an AgentFunction into
    * a form that open ai accepts like below
    * [
    *       'name' => 'get_current_weather',
    *       'description' => 'Get the current weather in a given location',
    *       'parameters' => [
    *           'type' => 'object',
    *           'properties' => [
    *               'location' => [
    *                   'type' => 'string',
    *                   'description' => 'The city and state, e.g. San Francisco, CA',
    *               ],
    *               'unit' => [
    *                   'type' => 'string',
    *                   'enum' => ['celsius', 'fahrenheit']
    *               ],
    *           ],
    *           'required' => ['location'],
    *       ],
    *   ]
    */
    protected function convertFunctionsForModel(AgentFunction $function) {
        $parameters = [];
        foreach ($function->parameters as $parameter) {
            $parameters[$parameter["name"]] = [
                'type' => $parameter["type"], 
                'description' => $parameter["description"],
            ];
        }

        return [
            'name' => $function->name,
            'description' => $function->description,
            'parameters' => [
                'type' => 'object',

                //convert to object so json_encode works as expected
                // and converts [] to {}
                'properties' => (object)$parameters,    

                'required' => $function->requiredParameters,
            ]
        ];
    }



    // Given a context, and a max token count, it returns 
    // a new context that is under the max tokens count
    private function getTokenLimitedContext($context, $maxTokens = 3500) {
            
        if (count($context) < 1) {
            return $context;
        }

        $provider = new EncoderProvider();

        $encoder = $provider->getForModel($this->model);
        
        $newContext = [];
        $tokenUsage = 0;

        // Go through context from newest first, dropping oldest ones off
        foreach(array_reverse($context) as $msg) {
            $tokens = $encoder->encode((string) $msg['content']);
            
            // If there is a function call then add those tokens too
            if (array_key_exists('function_call', $msg)) {
                $tokens = [...$tokens, $encoder->encode(json_encode($msg['function_call']))];
            }

            if ($tokenUsage + count($tokens) > $maxTokens) {
                break; //we have max tokens so break out and return
            }

            $newContext[] = $msg;
            $tokenUsage = $tokenUsage + count($tokens);
        }
    
        //reverse so that it's chronological order again
        //since we went backwards above
        return array_reverse($newContext);  
    }


}