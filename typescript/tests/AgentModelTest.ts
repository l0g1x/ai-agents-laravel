import { expect } from 'chai';
import { AgentModel } from '../src/AgentModel';

describe('AgentModel', () => {
    let agentModel: AgentModel;

    beforeEach(() => {
        agentModel = new AgentModel();
    });

    it('should create an instance of AgentModel', () => {
        expect(agentModel).to.be.instanceOf(AgentModel);
    });

    it('should set and get the agent name', () => {
        agentModel.setName('Test Agent');
        expect(agentModel.getName()).to.equal('Test Agent');
    });

    it('should set and get the agent status', () => {
        agentModel.setStatus('active');
        expect(agentModel.getStatus()).to.equal('active');
    });

    // Add more tests as per the properties and methods in your AgentModel class
});