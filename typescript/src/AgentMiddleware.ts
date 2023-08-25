```typescript
import { Request, Response, NextFunction } from 'express';

export class AgentMiddleware {
    public static async validateAgentExists(req: Request, res: Response, next: NextFunction) {
        // Here you would check if the agent exists in the database
        // If it does not exist, return a 404 error
        // If it does exist, add it to the request object and call next()
        // This is just a placeholder, replace with your actual implementation
        const agentExists = true;

        if (!agentExists) {
            res.status(404).send({ error: 'Agent not found' });
        } else {
            req.agent = agentExists;
            next();
        }
    }
}
```