/** @format */

import React from "react";
import { useParams } from "react-router-dom";

const ClientProfile = () => {
  const { email: encodedEmail } = useParams();
  const email = decodeURIComponent(encodedEmail);

  const client = {
    name: "Odusote Mayorkun",
    email: email,
    phone: "18160730668",
    address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    nationality: "Nigerian",
    age: "54", // Assuming this age for the example
    country: "Nigeria, Uganda",
    occupation: "Engineer",
    COI: "Iceland",
    sex: "Female",
    education: "Bachelor's Degree",
    purpose: "Trading",
    DOB: "04/11/2012",
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-xl mb-4">Client Profile</h1>
      <h2 className="text-xs mb-6 text-gray-400">
        View client profile details below
      </h2>
      <div className=" bg-white h-screen p-8 rounded-md">
        <div className="bg-gray-50 p-4 rounded-md shadow-sm mb-6">
          <p className="text-black text-xs mb-4 font-semibold">
            Clients Picture
          </p>
          <div className="flex items-center gap-6">
            {" "}
            <div className="">
              {" "}
              <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            </div>
            <div className="grid gap-2">
              <h2 className="text-sm font-bold">{client.name}</h2>
              <p className="text-gray-500 text-xs">{client.email}</p>
              <p className="text-gray-500 flex space-x-2 text-xs">
                <span>{client.sex}</span>
                <span>{client.age} years old</span>
                <span>{client.nationality}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>Full Name:</p>
            <p className="mb-4">{client.name}</p>
            <p>Applicant Name (as in passport):</p>
            <p className="mb-4">{client.passportName}</p>
            <p>Place of Birth:</p>
            <p className="mb-4">{client.placeOfBirth}</p>
            <p>Date of Birth:</p>
            <p className="mb-4">{client.DOB}</p>
            <p>Marital Status:</p>
            <p className="mb-4">{client.maritalStatus}</p>
            <p>Current Occupation:</p>
            <p className="mb-4">{client.occupation}</p>
            <p>Address:</p>
            <p className="mb-4">{client.address}</p>
            <p>COI:</p>
            <p>{client.COI}</p>
          </div>
          <div>
            <p>Email:</p>
            <p className="mb-4">{client.email}</p>
            <p>Gender:</p>
            <p className="mb-4">{client.sex}</p>
            <p>Country of Citizenship:</p>
            <p className="mb-4">{client.country}</p>
            <p>Education:</p>
            <p className="mb-4">{client.education}</p>
            <p>Phone Number:</p>
            <p className="mb-4">{client.phone}</p>
            <p>Mailing Address:</p>
            <p className="mb-4">{client.mailingAddress}</p>
            <p>Purpose of Traveling:</p>
            <p>{client.purpose}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
