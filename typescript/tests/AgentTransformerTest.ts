import { expect } from 'chai';
import { AgentTransformer } from '../src/AgentTransformer';

describe('AgentTransformer', () => {
    let agentTransformer: AgentTransformer;

    beforeEach(() => {
        agentTransformer = new AgentTransformer();
    });

    it('should transform agent data correctly', () => {
        const agentData = {
            id: 1,
            name: 'Test Agent',
            // other agent data
        };

        const transformedData = agentTransformer.transform(agentData);

        expect(transformedData).to.have.property('id');
        expect(transformedData).to.have.property('name');
        // check other transformed properties
    });

    // Add more tests as needed
});