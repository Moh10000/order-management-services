import { Router } from 'express';
import CustomerController from '../controllers/CustomerController';

const router = Router();

router.post('/', CustomerController.addCustomer);
router.post('/', CustomerController.customerLogin);
router.delete('/', CustomerController.deleteCustomer);

export default router;
