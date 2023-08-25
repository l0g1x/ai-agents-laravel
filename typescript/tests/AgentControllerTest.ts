import { expect } from 'chai';
import { AgentController } from '../src/AgentController';
import { AgentService } from '../src/AgentService';
import { Agent } from '../src/Agent';
import { AgentException } from '../src/AgentException';

describe('AgentController', () => {
    let agentController: AgentController;
    let agentService: AgentService;

    beforeEach(() => {
        agentService = new AgentService();
        agentController = new AgentController(agentService);
    });

    it('should create an agent', async () => {
        const agent = new Agent();
        const createdAgent = await agentController.create(agent);
        expect(createdAgent).to.be.instanceOf(Agent);
    });

    it('should throw an exception when creating an invalid agent', async () => {
        const agent = new Agent();
        agent.name = ''; // Invalid name
        try {
            await agentController.create(agent);
        } catch (error) {
            expect(error).to.be.instanceOf(AgentException);
        }
    });

    // Add more tests as needed...
});