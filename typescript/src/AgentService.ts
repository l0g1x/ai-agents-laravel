import { Agent } from './Agent';
import { AgentRepository } from './AgentRepository';
import { AgentException } from './AgentException';
import { AgentValidator } from './AgentValidator';
import { AgentTransformer } from './AgentTransformer';

export class AgentService {
    private repository: AgentRepository;
    private validator: AgentValidator;
    private transformer: AgentTransformer;

    constructor() {
        this.repository = new AgentRepository();
        this.validator = new AgentValidator();
        this.transformer = new AgentTransformer();
    }

    async createAgent(agentData: any): Promise<Agent> {
        try {
            this.validator.validate(agentData);
            const agent = await this.repository.create(agentData);
            return this.transformer.transform(agent);
        } catch (error) {
            throw new AgentException(error.message);
        }
    }

    async getAgent(id: number): Promise<Agent> {
        try {
            const agent = await this.repository.get(id);
            return this.transformer.transform(agent);
        } catch (error) {
            throw new AgentException(error.message);
        }
    }

    async updateAgent(id: number, agentData: any): Promise<Agent> {
        try {
            this.validator.validate(agentData);
            const agent = await this.repository.update(id, agentData);
            return this.transformer.transform(agent);
        } catch (error) {
            throw new AgentException(error.message);
        }
    }

    async deleteAgent(id: number): Promise<void> {
        try {
            await this.repository.delete(id);
        } catch (error) {
            throw new AgentException(error.message);
        }
    }
}