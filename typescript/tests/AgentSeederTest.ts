import { expect } from 'chai';
import { AgentSeeder } from '../src/AgentSeeder';
import { Agent } from '../src/Agent';

describe('AgentSeeder', () => {
    let agentSeeder: AgentSeeder;

    beforeEach(() => {
        agentSeeder = new AgentSeeder();
    });

    it('should create an instance of AgentSeeder', () => {
        expect(agentSeeder).to.be.instanceOf(AgentSeeder);
    });

    it('should seed the database with agents', async () => {
        const agents: Agent[] = await agentSeeder.seed();

        expect(agents).to.be.an('array');
        expect(agents.length).to.be.greaterThan(0);

        agents.forEach(agent => {
            expect(agent).to.be.instanceOf(Agent);
        });
    });
});