import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import IncomeTracker from './components/IncomeTracker';
import ExpenseTracker from './components/ExpenseTracker';
import GoalSetter from './components/GoalSetter';
import ReportGenerator from './components/ReportGenerator';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/income" element={<IncomeTracker />} />
        <Route path="/expense" element={<ExpenseTracker />} />
        <Route path="/goals" element={<GoalSetter />} />
        <Route path="/reports" element={<ReportGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
