```typescript
import { Model } from 'sequelize-typescript';

export class AgentModel extends Model {
    id!: number;
    name!: string;
    status!: string;
    createdAt!: Date;
    updatedAt!: Date;
}
```