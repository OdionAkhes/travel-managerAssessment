import React from 'react';
import Card from '../components/Card'; 

const Dashboard = ({ user }) => {
    return (
      <div className="workspace mt-6 px-8">
        <h1 className="mb-1 text-md  font-semibold">Your Workspace</h1>
        <h2 className="text-sm text-gray-300 mb-6">
          Welcome, {user.name || "xxx"}
        </h2>
        <h3 className="text-sm font-semibold mb-4">Overview</h3>
        <div className="cards-container flex">
          <div className="left flex-1 mr-2 space-y-8">
            <Card
              headerLeft="Today's Agenda"
              content="You don't have any event scheduled for today."
              size="small"
            />
            <Card
              headerLeft="Tasks that are due"
              headerRight="Create Task →

"
              content={
                <div className="bg-yellow-50 p-4">Date Created - Due Date</div>
              }
              size="large"
            />
          </div>
          <div className="right flex-1 ml-2">
            <Card
              headerLeft="Activity Report"
              headerRight="View Full Activity Report →

"
              content="Date: [date here]. You added a new client. Status: Pending."
              size="large"
            />
          </div>
        </div>
      </div>
    );
};

export default Dashboard;
