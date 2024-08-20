import express from 'express';
import { addTransaction, getTransactions, setGoal, getGoals } from '../controllers/financeController';

const router = express.Router();

router.post('/transaction', addTransaction);
router.get('/transactions', getTransactions);
router.post('/goal', setGoal);
router.get('/goals', getGoals);

export default router;
