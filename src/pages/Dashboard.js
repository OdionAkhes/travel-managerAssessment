/** @format */

import React from "react";
import Card from "../components/Card";

const Dashboard = ({ user }) => {
  return (
    <div className="workspace mt-6 px-4 sm:px-8">
      <h1 className="mb-1 text-md font-semibold">Your Workspace</h1>
      <h2 className="text-sm text-gray-300 mb-6">
        Welcome, {user.name || "xxx"}
      </h2>
      <h3 className="text-sm font-semibold mb-4">Overview</h3>
      <div className="cards-container flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="left w-full sm:flex-1 space-y-6">
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
            headerRight="Create Tasks →"
            content={
              <div className="bg-yellow-50 p-3 mb-8">
                <div className="font-bold mb-2 text-black">
                  Follow up with{" "}
                  <span className="text-yellow-500">Odusote</span>
                </div>
                <div className="flex gap-4 mt-2 text-black">
                  <span>Due on: 1/21/2021</span>
                  <span>Created on: 1/15/2021</span>
                </div>
              </div>
            }
            size="large"
          />
        </div>
        <div className="right w-full sm:flex-1">
          <Card
            headerLeft="Activity Report"
            headerRight="View Full Activity Report →"
            content={
              <div className="mb-8">
                <div className="flex items-center ">
                  <div className="border-l-2 border-gray-400 flex-grow mr-2"></div>
                  <div>Tuesday (18th Sep 2019)</div>
                </div>
                <div className="">You added a new client.</div>
                <div className="pl-10 text-xs font-bold text-yellow-500">
                  Odusote Mayorkun
                </div>
                <p className="border-l-2 border-yellow-500 bg-yellow-50 text-xs p-1 mt-1 ml-10">
                  Status: Pending
                </p>
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
