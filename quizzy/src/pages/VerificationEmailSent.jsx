import { Link } from 'react-router-dom'; // Ensure you import Link if using React Router


const VerificationEmailSent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 space-y-6 bg-white shadow-lg rounded-lg w-96">
        <h1 className="text-3xl text-center font-bold text-gray-800">
          Verification Email Sent
        </h1>
        <p className="text-center text-gray-600">
          We have sent a verification email to your address. Please check your
          inbox and follow the instructions to verify your email.
        </p>
        <div className="flex flex-col gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
            Resend Email
          </button>
          <Link to="/" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out text-center block">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerificationEmailSent;
