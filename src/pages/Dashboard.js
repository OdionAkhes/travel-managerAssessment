import React from 'react'
import Card from '../components/Card'; 


const Dashboard = ({ user }) => {
    return (
        <div className="workspace mt-6 px-8">
            <h1 className="mb-1 text-md  font-semibold ">Your Workspace</h1>
            <h2 className="text-sm text-gray-300 mb-6">Welcome, {user.name || "xxx"}</h2>
            <h3 className="text-sm font-semibold mb-4">Overview</h3>
            <div className="cards-container flex">
                <div className="left flex-1 mr-2 space-y-8">
                    <Card header="Todays Agenda" content="This is the first card." size="small" />
                    <Card header="Activity Report" content="This is the second card." size="large" />
                </div>
                <div className="right flex-1 ml-2 ">
                    <Card header="Tasks that are due" content="This is the third card." size="large" />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

  