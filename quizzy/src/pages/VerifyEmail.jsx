import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {verifyEmail} from "../services/auth"

// Ensure VerifyEmail function is imported or defined elsewhere
// import { VerifyEmail } from 'path-to-your-api-functions';

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const handleEmailVerification = async () => {
    try {
      const res = await verifyEmail(token); // Fix the typo here
      if (res.error) {
        console.error(res.message); // Use console.error for errors
        return;
      }
      navigate("/login");
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 space-y-6 bg-white shadow-lg rounded-lg w-96">
        <h1 className="text-3xl text-center font-bold text-gray-800">
          Verify Email
        </h1>
        <p className="text-center text-gray-600">Please Verify Your Email</p>
        <div className="flex flex-col gap-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            onClick={handleEmailVerification}
          >
            Verify Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
