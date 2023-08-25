import { expect } from 'chai';
import { AgentFactory } from '../src/AgentFactory';
import { Agent } from '../src/Agent';

describe('AgentFactory', () => {
    let agentFactory: AgentFactory;

    beforeEach(() => {
        agentFactory = new AgentFactory();
    });

    it('should create an instance of Agent', () => {
        const agent = agentFactory.create();
        expect(agent).to.be.instanceOf(Agent);
    });

    it('should create an Agent with default values', () => {
        const agent = agentFactory.create();
        expect(agent.name).to.equal('');
        expect(agent.status).to.equal('offline');
    });

    it('should create an Agent with provided values', () => {
        const agent = agentFactory.create({ name: 'Test Agent', status: 'online' });
        expect(agent.name).to.equal('Test Agent');
        expect(agent.status).to.equal('online');
    });
});