import { expect } from 'chai';
import { AgentServiceProvider } from '../src/AgentServiceProvider';

describe('AgentServiceProvider', () => {
    let agentServiceProvider: AgentServiceProvider;

    beforeEach(() => {
        agentServiceProvider = new AgentServiceProvider();
    });

    it('should be able to create an instance', () => {
        expect(agentServiceProvider).to.be.instanceOf(AgentServiceProvider);
    });

    it('should be able to provide services', () => {
        const services = agentServiceProvider.provideServices();
        expect(services).to.be.an('array');
    });

    it('should provide the correct services', () => {
        const services = agentServiceProvider.provideServices();
        expect(services).to.include('AgentService');
    });
});