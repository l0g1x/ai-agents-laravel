```typescript
import { Agent } from './Agent';

export class AgentTransformer {
    public static transform(agent: Agent): any {
        return {
            id: agent.id,
            name: agent.name,
            status: agent.status,
            createdAt: agent.createdAt,
            updatedAt: agent.updatedAt
        };
    }
}
```