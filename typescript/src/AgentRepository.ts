import { AgentModel } from './AgentModel';
import { Agent } from './Agent';

export class AgentRepository {
    private model: typeof AgentModel;

    constructor() {
        this.model = AgentModel;
    }

    async create(agentData: Agent): Promise<Agent> {
        return await this.model.create(agentData);
    }

    async findById(id: number): Promise<Agent | null> {
        return await this.model.findByPk(id);
    }

    async update(id: number, agentData: Agent): Promise<[number, Agent[]]> {
        return await this.model.update(agentData, {
            where: {
                id: id
            }
        });
    }

    async delete(id: number): Promise<number> {
        return await this.model.destroy({
            where: {
                id: id
            }
        });
    }
}