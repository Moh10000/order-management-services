import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const router = Router();

router.post('/', OrderController.addOrder);
router.put('/', OrderController.updatedOrder);
router.delete('/', OrderController.deleteOrder);

export default router;
