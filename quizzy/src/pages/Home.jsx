import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 space-y-6 bg-white shadow-lg rounded-lg w-96">
        <h1 className="text-3xl text-center font-bold text-gray-800">
          Welcome to Quizzy
        </h1>
        <p className="text-center text-gray-600">
          The best place to test your knowledge
        </p>
      </div>
    </div>
  );
};

export default Home;
