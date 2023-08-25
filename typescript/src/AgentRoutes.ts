import express from 'express';
import { AgentController } from './AgentController';
import { AgentMiddleware } from './AgentMiddleware';

const router = express.Router();
const agentController = new AgentController();
const agentMiddleware = new AgentMiddleware();

router.get('/agents', agentMiddleware.validateGetAgents, agentController.getAgents);
router.get('/agents/:id', agentMiddleware.validateGetAgent, agentController.getAgent);
router.post('/agents', agentMiddleware.validateCreateAgent, agentController.createAgent);
router.put('/agents/:id', agentMiddleware.validateUpdateAgent, agentController.updateAgent);
router.delete('/agents/:id', agentMiddleware.validateDeleteAgent, agentController.deleteAgent);

export default router;