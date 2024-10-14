import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import soham from "../Images/soham.jpeg";
import "./About.css";

const About = () => {
  const [showMore4, setShowMore4] = useState(false);

  return (
    <div className='col xxx m-auto justify-center'>
      <div className='top'>
        <h1 className='ah1 text-orange-300'>About me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="team gap-5 justify-center m-2 mr-2 ml-2">
        <div>
        </div>
        <div className='row justify-center gap-5 flex flex-wrap'>
          
          <div className="bg-gray-300 rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="flex flex-col items-center">
              <img src={soham} alt="..." className="w-[250px] h-[250px] rounded-[60%] shadow-lg" />
              <h1 className="text-xl font-bold mt-4">Soham</h1>
              <p className="mt-2 text-gray-600 text-center">Web Developer</p>
              {showMore4 && (
                <p className="mt-2 text-gray-600 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              )}
              <div className="flex space-x-3 mt-4">
                <a href="https://www.linkedin.com/in/soham-mondal-2542b4257/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} className="text-blue-600" />
                </a>
                <a href="https://github.com/soham8167/video_conference" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} className="text-gray-800" />
                </a>
              </div>
              <button
                onClick={() => setShowMore4(!showMore4)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                {showMore4 ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
