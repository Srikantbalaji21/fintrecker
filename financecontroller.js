import Transaction from '../models/Transaction';
import Goal from '../models/Goal';

export const addTransaction = async (req, res) => {
  const newTransaction = new Transaction(req.body);
  await newTransaction.save();
  res.status(201).json(newTransaction);
};

export const getTransactions = async (req, res) => {
  const transactions = await Transaction.find({ userId: req.userId });
  res.status(200).json(transactions);
};

export const setGoal = async (req, res) => {
  const newGoal = new Goal(req.body);
  await newGoal.save();
  res.status(201).json(newGoal);
};

export const getGoals = async (req, res) => {
  const goals = await Goal.find({ userId: req.userId });
  res.status(200).json(goals);
};
