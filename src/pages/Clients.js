import React from 'react'
import { useNavigate } from 'react-router'

const Clients = () => {
  const navigate = useNavigate();
    const sampleClient = {
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope@gmail.com",
      phone: "08160730668",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    };
  const handleRowClick = (clientEmail) => {
 navigate(`/clients/${clientEmail}`);
}

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-xl mb-1 text-black">Clients</h1>
      <h2 className="text-sm mb-6 text-gray-400">Here's the clients list</h2>

      <div className="bg-white p-6 rounded-md shadow-sm">
        <div className="flex mb-6">
          <input
            type="search"
            placeholder="Search by name,email..."
            className="bg-gray-50 flex-grow pl-4 border rounded-md mr-4 text-xs"
          />
          <button className="bg-yellow-500 text-sm font-semibold text-white px-6 py-2 rounded-lg">
            Add New Client
          </button>
        </div>

        <table className="w-full  text-sm ">
          <thead className=" bg-yellow-50 border-b-2  border-yellow-400">
            <tr className="text-left mb-2 ">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Residential Address</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(sampleClient.email)}
                className="text-sm mt-2 pl-3 text-gray-600 hover:border-l-2  hover:border-yellow-500 hover:bg-yellow-50 cursor-pointer"
              >
                <td className="p-3">{sampleClient.name}</td>
                <td className="p-3">{sampleClient.email}</td>
                <td className="p-3">{sampleClient.phone}</td>
                <td className="p-3">{sampleClient.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Clients