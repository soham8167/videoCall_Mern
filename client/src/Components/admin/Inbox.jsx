import axios from 'axios';
import Swal from "sweetalert2";
import React, { useState, useEffect } from 'react';
import { FiTrash2, FiEye } from 'react-icons/fi';

const Inbox = () => {
  const [data, setData] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Fetch messages from an API 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://meetup-server.vercel.app/getMessage")
      .then((response) => {
        console.log("API response:", response.data); // Log response for debugging
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.response || error.message || error);
        Swal.fire("Error", "There was an error fetching the data!", "error");
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete the message?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://meetup-server.vercel.app/getMessage/${id}`)
          .then((response) => {
            Swal.fire("Deleted!", "Your message has been deleted.", "success");
            fetchData(); // Refresh the data
          })
          .catch((error) => {
            console.error("Error deleting data:", error.response || error.message || error);
            Swal.fire("Error", "There was an error deleting the message!", "error");
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your message is safe :)", "error");
      }
    });
  };

  const handleView = (message) => {
    setSelectedMessage(message);
  };

  const handleClose = () => {
    setSelectedMessage(null);
  };




  return (
    <div className="p-6 mostly-customized-scrollbar overflow-y-scroll w-[100vw] overflow-x-scroll px-0 max-h-[100vh] bg-gray-200 me-0">
        <div className="text-3xl font-bold text-center mb-4">Inbox</div>
      {data.length === 0 ? (
        <p className="text-center text-gray-500">No messages.</p>
      ) : (
        <ul>
          {data.map(message => (
            <li key={message._id} className="shadow-custom border border-gray-400 text-slate-800 rounded-lg p-4 mb-4 flex justify-between items-center mx-5">
              <div>
                <p className="font-semibold">{message.name}</p>
                <p className="text-sm text-slate-400">{message.messageTime}</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleView(message)} className="text-gray-500 hover:text-gray-700">
                  <FiEye size={20} />
                </button>
                <button onClick={() => handleDelete(message._id)} className="text-red-500 hover:text-red-700">
                  <FiTrash2 size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {selectedMessage && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-xl font-bold mb-2">{selectedMessage.subject}</h3>
            <p className="text-sm text-gray-600 mb-4"><strong>From: </strong> {selectedMessage.name}</p>
            <p className="text-sm text-gray-600 mb-4"><strong>Email: </strong>{selectedMessage.email}</p>
            <p className="mb-4">{selectedMessage.message}</p>
            <button onClick={handleClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;



