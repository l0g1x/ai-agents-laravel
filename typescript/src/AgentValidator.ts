import * as Joi from 'joi';

export class AgentValidator {
    static validate(agentData: any) {
        const schema = Joi.object({
            name: Joi.string().required(),
            age: Joi.number().integer().min(0),
            isActive: Joi.boolean(),
            // Add more fields as per your Agent model
        });

        const { error } = schema.validate(agentData);
        if (error) {
            throw new Error(`Agent validation error: ${error.details[0].message}`);
        }
    }
}