import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="/income">Track Income</Link>
        <Link to="/expense">Track Expenses</Link>
        <Link to="/goals">Set Goals</Link>
        <Link to="/reports">Generate Reports</Link>
      </nav>
    </div>
  );
};

export default Dashboard;
