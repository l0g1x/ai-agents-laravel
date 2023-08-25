```typescript
import { Agent } from './Agent';

export class AgentFactory {
    static create(data: any): Agent {
        const agent = new Agent();
        agent.id = data.id;
        agent.name = data.name;
        agent.status = data.status;
        agent.createdAt = data.created_at;
        agent.updatedAt = data.updated_at;
        return agent;
    }
}
```