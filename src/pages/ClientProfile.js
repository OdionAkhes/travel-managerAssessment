/** @format */

import { useParams, useNavigate } from "react-router-dom";

const ClientProfile = () => {
  const { email } = useParams();

const navigate = useNavigate();
  const client = {
    name: "Odusote Mayorkun",
    email: email,
    phone: "+234(0)8160730668",
    address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    nationality: "Nigerian",
    age: "54", // Assuming this age for the example
    country: "Nigeria, Uganda",
    passportName: "Odusote Mayorkun Kemi",
    occupation: "Engineer",
    COI: "Iceland",
    sex: "Female",
    education: "Bachelor's Degree",
    purpose: "Trading",
    placeOfBirth: "Nigeria",
maritalStatus: "married",
    DOB: "04/11/2012",
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-l mb-2 text-black">Client Profile</h1>
      <h2 className="text-xs mb-6 text-gray-400">
        View client profile details below
      </h2>
      <div className=" bg-white  p-8 rounded-md">
        <div className="bg-gray-50 p-4 rounded-md shadow-sm mb-14">
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

        <div className="grid grid-cols-2 gap-8 mt-10">
          <div>
            <p className="text-xs text-gray-400 mb-2">Full Name</p>
            <p className="font-bold text-xs mb-4">{client.name}</p>

            <p className="text-xs text-gray-400 mb-2">
              Applicant Name{" "}
              <span className="text-red-400">(as shown in passport)</span>
            </p>
            <p className="font-bold text-xs mb-4">{client.passportName}</p>

            <div className="flex gap-20">
              <div>
                <p className="text-xs text-gray-400 mb-2">Place of Birth</p>
                <p className="font-bold text-xs mb-4">{client.placeOfBirth}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400  mb-2">Date of Birth</p>
                <p className="font-bold text-xs mb-4">{client.DOB}</p>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-2">Marital Status</p>
            <p className="font-bold text-xs mb-4">{client.maritalStatus}</p>

            <p className="text-xs text-gray-400 mb-2">Current Occupation</p>
            <p className="font-bold text-xs mb-4">{client.occupation}</p>

            <p className="text-xs text-gray-400 mb-2">Residential Address</p>
            <p className="font-bold text-xs mb-4">{client.address}</p>

            <p className="text-xs text-gray-400 mb-2">Country of Interest</p>
            <p className="font-bold text-xs">{client.COI}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-2">Email</p>
            <p className="font-bold text-xs mb-4">{client.email}</p>

            <p className="text-xs text-gray-400 mb-2">Gender</p>
            <p className="font-bold text-xs mb-4">{client.sex}</p>

            <p className="text-xs text-gray-400 mb-2">Country of Citizenship</p>
            <p className="font-bold text-xs mb-4">{client.country}</p>

            <p className="text-xs text-gray-400 mb-2">
              Education
              <span className="text-red-400">
                {" "}
                (Client's highest level of education)
              </span>
            </p>
            <p className="font-bold text-xs mb-4">{client.education}</p>

            <p className="text-xs text-gray-400 mb-2">Phone Number</p>
            <p className="font-bold text-xs mb-4">{client.phone}</p>

            <p className="text-xs text-gray-400 mb-2">Mailing Address</p>
            <p className="font-bold text-xs mb-4">{client.address}</p>

            <p className="text-xs text-gray-400 mb-2">Purpose of Traveling</p>
            <p className="font-bold text-xs">{client.purpose}</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/clients")}
          className="ml-auto flex justify-end bg-yellow-500 text-white py-1 text-sm px-8 rounded mt-4"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ClientProfile;
