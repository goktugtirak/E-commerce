import express from 'express';
import { getRegisterPage, registerUser, getLoginPage, loginUser, logoutUser} from '../controllers/userController.js';
import { getIndexPage } from '../controllers/pageController.js';
import { authenticateToken } from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/register', getRegisterPage);
router.post('/register', registerUser);

router.get('/login', getLoginPage);
router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.route('/').get(authenticateToken, getIndexPage);

export default router;
