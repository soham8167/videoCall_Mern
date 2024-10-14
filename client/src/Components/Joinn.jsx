import React from 'react';
import videoCall from '../Images/videoCall.jpeg';
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa";
import { MdCallEnd } from "react-icons/md";

const Joinn = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[50px]">
            <div className="md:col-span-2 bg-[#0c4a6e] p-6 rounded-lg shadow-md">
                <img src={videoCall} alt='video call' className="w-100 h-auto rounded-lg shadow-lg" />
                
                <div className='flex justify-center mt-5 space-x-12'>
                    <button className="hover:text-yellow-300 transition duration-300"><HiMiniSpeakerWave className="w-10 h-auto text-white"/></button>  
                    <button className="hover:text-red-700 transition duration-300"><MdCallEnd className="w-10 h-auto text-white"/></button> 
                    <button className="hover:text-green-300 transition duration-300"><FaMicrophone className="w-10 h-auto text-white"/></button>
                </div>
            </div>

            <div className="md:col-span-1 bg-[#38bdf8] p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-full max-w-md p-10 bg-[#134e4a] bg-opacity-80 shadow-md rounded-lg h-100 ">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                                
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter room code"
                                className="w-full px-3 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <button className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded hover:bg-blue-800 transition duration-300">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Joinn;

