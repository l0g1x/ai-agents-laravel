import { expect } from 'chai';
import { AgentException } from '../src/AgentException';

describe('AgentException', () => {
    it('should throw an error with a specific message', () => {
        const errorMessage = 'This is a test error';
        const testFunction = () => {
            throw new AgentException(errorMessage);
        };

        expect(testFunction).to.throw(AgentException, errorMessage);
    });
});