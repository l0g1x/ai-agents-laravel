import { AgentModel } from './AgentModel';
import { Schema } from 'mongoose';

export class AgentMigration {
    public static async up() {
        const exists = await AgentModel.exists();
        if (!exists) {
            await Schema.createCollection('agents');
            await Schema.collection('agents').createIndex({ name: 1 }, { unique: true });
        }
    }

    public static async down() {
        const exists = await AgentModel.exists();
        if (exists) {
            await Schema.dropCollection('agents');
        }
    }
}