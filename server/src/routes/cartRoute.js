import express from 'express';
import { getCartPage, addToCart, removeFromCart} from '../controllers/cartController.js';
import {authenticateToken} from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, getCartPage);
router.post('/add-to-cart', authenticateToken, addToCart);
router.post('/remove-from-cart', authenticateToken, removeFromCart);

export default router;