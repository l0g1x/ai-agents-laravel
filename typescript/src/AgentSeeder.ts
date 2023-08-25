import { AgentFactory } from './AgentFactory';
import { AgentModel } from './AgentModel';

export class AgentSeeder {
    private agentFactory: AgentFactory;

    constructor(agentFactory: AgentFactory) {
        this.agentFactory = agentFactory;
    }

    public async seed() {
        const agentsData = this.agentFactory.createAgents();

        for (let agentData of agentsData) {
            const agent = new AgentModel(agentData);
            await agent.save();
        }
    }
}