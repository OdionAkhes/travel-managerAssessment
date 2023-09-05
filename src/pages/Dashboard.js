
import React from "react";
import Card from "../components/Card";

const Dashboard = ({ user }) => {
  return (
    <div className="workspace mt-6 px-8">
      <h1 className="mb-1 text-md  font-semibold">Your Workspace</h1>
      <h2 className="text-sm text-gray-300 mb-6">
        Welcome, {user.name || "xxx"}
      </h2>
      <h3 className="text-sm font-semibold mb-4">Overview</h3>
      <div className="cards-container flex space-x-2">
        <div className="left flex-1 space-y-6">
          <Card
            headerLeft="Today's Agenda"
            content={
              <div className="text-center pt-4 pb-6 w-full block">
                You don't have any event scheduled for today.{" "}
                <span className="text-yellow-500">Add</span>
              </div>
            }
            size="small"
          />
          <Card
            headerLeft="Tasks that are due"
            headerRight="Create Task →"
            content={
              <div className="bg-yellow-50 p-4">
                <div className="font-bold mb-2">Follow up with <span className="text-yellow-500">Odusote</span></div>
                <div className="flex justify-between mt-2">
                  <span>Due on 1/21/2021</span>
                  <span>Created on 1/15/2021</span>
                </div>
              </div>
            }
            size="large"
          />
        </div>
        <div className="right flex-1">
          <Card
            headerLeft="Activity Report"
            headerRight="View Full Activity Report →"
            content={
              <div className="bg-yellow-50 p-4">
                <div className="flex items-center mb-2">
                  <div className="border-l-2 border-gray-400 flex-grow mr-2"></div>
                  <div>Tuesday (18th Sep 2019)</div>
                </div>
                <div className="mb-2">You added a new client.</div>
                <div className="bg-yellow-500 text-xs p-1 font-bold">
                  Odusote Mayorkun
                </div>
                <div className="bg-yellow-500 text-xs p-1 mt-1">
                  Status: Pending
                </div>
              </div>
            }
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;