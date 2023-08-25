import { expect } from 'chai';
import { AgentValidator } from '../src/AgentValidator';

describe('AgentValidator', () => {
    let agentValidator: AgentValidator;

    beforeEach(() => {
        agentValidator = new AgentValidator();
    });

    describe('validate', () => {
        it('should validate agent data correctly', () => {
            const agentData = {
                name: 'Test Agent',
                // other agent data
            };

            const result = agentValidator.validate(agentData);

            expect(result).to.be.true;
        });

        it('should throw an error when agent data is invalid', () => {
            const agentData = {
                name: '', // invalid name
                // other agent data
            };

            expect(() => agentValidator.validate(agentData)).to.throw();
        });
    });
});