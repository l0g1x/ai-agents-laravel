import { expect } from 'chai';
import { AgentService } from '../src/AgentService';
import { AgentFactory } from '../src/AgentFactory';

describe('AgentService', () => {
    let agentService: AgentService;
    let agentFactory: AgentFactory;

    beforeEach(() => {
        agentFactory = new AgentFactory();
        agentService = new AgentService(agentFactory);
    });

    it('should create an agent', () => {
        const agentData = { name: 'Test Agent', type: 'AI' };
        const agent = agentService.create(agentData);
        expect(agent.name).to.equal(agentData.name);
        expect(agent.type).to.equal(agentData.type);
    });

    it('should update an agent', () => {
        const agentData = { name: 'Test Agent', type: 'AI' };
        const updatedData = { name: 'Updated Agent', type: 'Human' };
        const agent = agentService.create(agentData);
        const updatedAgent = agentService.update(agent.id, updatedData);
        expect(updatedAgent.name).to.equal(updatedData.name);
        expect(updatedAgent.type).to.equal(updatedData.type);
    });

    it('should delete an agent', () => {
        const agentData = { name: 'Test Agent', type: 'AI' };
        const agent = agentService.create(agentData);
        agentService.delete(agent.id);
        const deletedAgent = agentService.get(agent.id);
        expect(deletedAgent).to.be.null;
    });
});