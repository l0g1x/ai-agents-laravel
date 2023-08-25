import { Request, Response } from 'express';
import { AgentService } from './AgentService';
import { AgentValidator } from './AgentValidator';
import { AgentTransformer } from './AgentTransformer';
import { AgentException } from './AgentException';

export class AgentController {
    private agentService: AgentService;
    private agentValidator: AgentValidator;
    private agentTransformer: AgentTransformer;

    constructor() {
        this.agentService = new AgentService();
        this.agentValidator = new AgentValidator();
        this.agentTransformer = new AgentTransformer();
    }

    public async index(req: Request, res: Response) {
        try {
            const agents = await this.agentService.getAllAgents();
            const transformedAgents = this.agentTransformer.transformCollection(agents);
            res.json(transformedAgents);
        } catch (error) {
            throw new AgentException(error.message);
        }
    }

    public async show(req: Request, res: Response) {
        try {
            this.agentValidator.validateId(req.params.id);
            const agent = await this.agentService.getAgentById(req.params.id);
            const transformedAgent = this.agentTransformer.transform(agent);
            res.json(transformedAgent);
        } catch (error) {
            throw new AgentException(error.message);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            this.agentValidator.validateCreate(req.body);
            const agent = await this.agentService.createAgent(req.body);
            const transformedAgent = this.agentTransformer.transform(agent);
            res.json(transformedAgent);
        } catch (error) {
            throw new AgentException(error.message);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            this.agentValidator.validateUpdate(req.body);
            const agent = await this.agentService.updateAgent(req.params.id, req.body);
            const transformedAgent = this.agentTransformer.transform(agent);
            res.json(transformedAgent);
        } catch (error) {
            throw new AgentException(error.message);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            this.agentValidator.validateId(req.params.id);
            await this.agentService.deleteAgent(req.params.id);
            res.json({ message: 'Agent deleted successfully' });
        } catch (error) {
            throw new AgentException(error.message);
        }
    }
}