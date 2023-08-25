import express from 'express';
import { AgentRoutes } from './AgentRoutes';
import { AgentServiceProvider } from './AgentServiceProvider';

const app = express();
const port = process.env.PORT || 3000;

// Register Service Provider
AgentServiceProvider.register();

// Register Routes
AgentRoutes.register(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;