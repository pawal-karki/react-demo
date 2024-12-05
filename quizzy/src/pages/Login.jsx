import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/auth";

const Login = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email!").required("Email is required."),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters.")
      .required("Password is required."),
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8">
        <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-8">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Log in to your account to continue
        </p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const res = await login(values);
            if (res.error) {
              console.error(res.message);
              return;
            }
            navigate("/");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="name@example.com"
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs mt-2">{errors.email}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="••••••••"
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <p className="text-red-500 text-xs mt-2">{errors.password}</p>
                )}
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="text-sm text-gray-500">
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300 focus:ring-2 focus:ring-blue-400"
                  />
                  Remember me
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
              >
                Log In
              </button>
              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-blue-500 font-medium hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
