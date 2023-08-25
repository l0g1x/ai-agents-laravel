import { AgentService } from './AgentService';
import { AgentRepository } from './AgentRepository';

export class AgentServiceProvider {
    private agentService: AgentService;
    private agentRepository: AgentRepository;

    constructor() {
        this.agentRepository = new AgentRepository();
        this.agentService = new AgentService(this.agentRepository);
    }

    public getAgentService(): AgentService {
        return this.agentService;
    }

    public getAgentRepository(): AgentRepository {
        return this.agentRepository;
    }
}