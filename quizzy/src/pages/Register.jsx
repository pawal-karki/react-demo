import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [error, setError] = useState({});
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();

  const handleUserInfoChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const validateData = () => {
    const newError = {};
    const usernamePattern = /^[a-zA-Z0-9_]+$/;
    if (userInfo.username.trim() === "") {
      newError.username = "Username cannot be empty";
    } else if (!userInfo.username.match(usernamePattern)) {
      newError.username =
        "Username can only contain letters, numbers, and underscores";
    } else {
      delete newError.username;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (userInfo.email.trim() === "") {
      newError.email = "Email cannot be empty";
    } else if (!userInfo.email.match(emailPattern)) {
      newError.email = "Email is not valid";
    } else {
      delete newError.email;
    }
    if (userInfo.password1.length < 6) {
      newError.password1 = "Password must be at least 6 characters long";
    } else {
      delete newError.password1;
    }
    if (userInfo.password2 !== userInfo.password1) {
      newError.password2 = "Passwords do not match";
    } else {
      delete newError.password2;
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validateData()) {
      const result = await register(userInfo);
      if (result.error) {
        setServerError(result.message || {});
        return;
      }

      navigate("/verification-sent");
    } else {
      console.log(error);
      console.log("Data is invalid. Cannot submit");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-3xl font-semibold mb-6 text-gray-800">
          Register
        </h1>
        <form>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
              <input
                type="text"
                name="username"
                id="username"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                value={userInfo.username}
                onChange={handleUserInfoChange}
                placeholder="Enter your name"
              />
              {error.username && (
                <p className="text-red-500 text-xs mt-1">{error.username}</p>
              )}
              {serverError?.username && (
                <p className="text-red-500 text-xs mt-1">
                  {serverError.username}
                </p>
              )}
            </label>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                value={userInfo.email}
                onChange={handleUserInfoChange}
                placeholder="Enter your email"
              />
              {error.email && (
                <p className="text-red-500 text-xs mt-1">{error.email}</p>
              )}
              {serverError?.email && (
                <p className="text-red-500 text-xs mt-1">{serverError.email}</p>
              )}
            </label>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password1"
              className="block text-sm font-medium text-gray-700"
            >
              Password
              <input
                type="password"
                name="password1"
                id="password1"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                value={userInfo.password1}
                onChange={handleUserInfoChange}
                placeholder="Enter your password"
              />
              {error.password1 && (
                <p className="text-red-500 text-xs mt-1">{error.password1}</p>
              )}
              {serverError?.password1 && (
                <p className="text-red-500 text-xs mt-1">
                  {serverError.password1}
                </p>
              )}
            </label>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password2"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
              <input
                type="password"
                name="password2"
                id="password2"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                value={userInfo.password2}
                onChange={handleUserInfoChange}
                placeholder="Confirm your password"
              />
              {error.password2 && (
                <p className="text-red-500 text-xs mt-1">{error.password2}</p>
              )}
              {serverError.password2 && (
                <p className="text-red-500 text-xs mt-1">
                  {serverError?.password2}
                </p>
              )}
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              onClick={handleRegister}
            >
              Register
            </button>
            <p className="text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
