```typescript
class AgentException extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = AgentException.name;
    }
}

export default AgentException;
```