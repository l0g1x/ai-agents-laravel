import { expect } from 'chai';
import { AgentRepository } from '../src/AgentRepository';
import { Agent } from '../src/Agent';

describe('AgentRepository', () => {
    let agentRepository: AgentRepository;

    beforeEach(() => {
        agentRepository = new AgentRepository();
    });

    it('should create a new agent', async () => {
        const agent = new Agent();
        const createdAgent = await agentRepository.create(agent);
        expect(createdAgent).to.be.instanceOf(Agent);
    });

    it('should update an agent', async () => {
        const agent = new Agent();
        agent.name = 'Test Agent';
        const updatedAgent = await agentRepository.update(agent);
        expect(updatedAgent.name).to.equal('Test Agent');
    });

    it('should delete an agent', async () => {
        const agent = new Agent();
        const deletedAgent = await agentRepository.delete(agent);
        expect(deletedAgent).to.be.null;
    });

    it('should find an agent by id', async () => {
        const agent = await agentRepository.findById(1);
        expect(agent).to.be.instanceOf(Agent);
    });

    it('should find all agents', async () => {
        const agents = await agentRepository.findAll();
        expect(agents).to.be.an('array');
    });
});