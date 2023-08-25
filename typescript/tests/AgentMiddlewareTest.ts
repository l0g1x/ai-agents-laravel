import { expect } from 'chai';
import { AgentMiddleware } from '../src/AgentMiddleware';

describe('AgentMiddleware', () => {
    let agentMiddleware: AgentMiddleware;

    beforeEach(() => {
        agentMiddleware = new AgentMiddleware();
    });

    it('should validate agent data', async () => {
        const req: any = {
            body: {
                name: 'Test Agent',
                type: 'AI',
                // Add other agent properties here
            },
        };
        const res: any = {};
        const next: any = () => {};

        await agentMiddleware.validateAgentData(req, res, next);

        expect(req.body).to.have.property('name');
        expect(req.body).to.have.property('type');
        // Add other property checks here
    });

    it('should handle invalid agent data', async () => {
        const req: any = {
            body: {
                name: '',
                type: '',
                // Add other agent properties here
            },
        };
        const res: any = {
            status: function (statusCode: number) {
                this.statusCode = statusCode;
                return this;
            },
            json: function (data: any) {
                this.data = data;
                return this;
            },
        };
        const next: any = () => {};

        await agentMiddleware.validateAgentData(req, res, next);

        expect(res.statusCode).to.equal(400);
        expect(res.data).to.have.property('error');
    });

    // Add more tests as needed
});