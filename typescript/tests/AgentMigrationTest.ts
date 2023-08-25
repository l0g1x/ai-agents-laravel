import { expect } from 'chai';
import { AgentMigration } from '../src/AgentMigration';
import { AgentModel } from '../src/AgentModel';

describe('AgentMigration', () => {
    let agentMigration: AgentMigration;

    beforeEach(() => {
        agentMigration = new AgentMigration();
    });

    it('should create agent table', async () => {
        await agentMigration.up();
        const hasTable = await AgentModel.hasTable('agents');
        expect(hasTable).to.be.true;
    });

    it('should drop agent table', async () => {
        await agentMigration.down();
        const hasTable = await AgentModel.hasTable('agents');
        expect(hasTable).to.be.false;
    });
});