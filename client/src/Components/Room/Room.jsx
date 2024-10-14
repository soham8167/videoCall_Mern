import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";




const Room = () => {
  const[roomID, setRoomId] = useState("");
  const[buttoState, setButtonState] = useState(false);
  const navigate = useNavigate()

  const GenerateRoomNumer = ()=>{
    setTimeout(() => {
      setRoomId(Math.floor(Math.random() * 999999) + 1);
      setButtonState(false);
    }, 2000);
  }
  const handleButtonState = ()=>{
    GenerateRoomNumer()
    setButtonState(true);
  }

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    navigate(`/room/${roomID}`)
}

  return (
    <div>
      <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden"></div>
      <div className=" relative"><Navbar /></div> 
      <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-3xl w-96">
            <form onSubmit={handleFormSubmit}>
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Enter Room Number</h3>
              <p className="text-gray-400">
                user can Enter their Desire number
              </p>
            </div>
            {buttoState?
            <button disabled type="button" className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 inline-flex items-center mb-2">
            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
            </svg>
            Loading...
            </button>
            :
            <button type="button" onClick={handleButtonState} className=" w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Generate</button>
            }
            <div className="space-y-6">
              <div>
                <input value={roomID} onChange={(e)=>setRoomId(e.target.value)}  className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400" type="text" placeholder="Enter Room Number" />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                </div>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500" >Enter</button>
              </div>
            </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;

/*

*/ 
