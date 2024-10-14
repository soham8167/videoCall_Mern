import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="flex flex-wrap  justify-center items-center min-h-screen bg-gray-200">
      <div className="max-w-xl ms-4 me-4  p-6 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-900">Privacy Policy</h1>
        <img src="https://www.termsfeed.com/public/uploads/2024/06/privacy-policy-individual.jpg" alt="Privacy Policy Template" className="mx-auto mb-6" />

        <p className="text-gray-700 leading-relaxed">
          <span className="font-bold">Your privacy is important to us.</span> We value your trust and are committed to protecting
          your personal information.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          [Add more details about your privacy policy here]
        </p>
      </div>

      <div className="max-w-xl ms-4 me-4  p-6 bg-white shadow-md rounded-md mt-8 text-gray-900">
        <p className="text-3xl font-bold mb-4 text-center font-serif">
          Ready to do your best work?
        </p>
        <p className="text-3xl font-bold mb-4 text-center font-serif">
          Let's get started.
        </p>

        <Link to="/signup"><button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign Up Now
        </button></Link>
      </div>
    </div>
  );
};

export default Privacy;
