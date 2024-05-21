import React,{ useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formSubmitted", formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden p-6">
        <div className="flex items-center justify-between mb-6">
         <NavLink to="/">
         <button className="text-green-500">
            <BsFillArrowLeftSquareFill size={36} />
          </button>
         </NavLink>
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mt-4">
          Hello Again!
        </h1>
        <p className="text-center text-gray-600 mt-2">Sign in to your account</p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
       
         <div className="rounded-md shadow-sm">
            <div className="mb-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                defaultValue="info@yourmail.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>
        

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
           <NavLink to="/menus">
           <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign in
            </button>
           </NavLink>
          </div>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <div className="w-full border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500 ">Or with</span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        <div className="mt-6 space-y-4">
          <button
            type="button"
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FaGoogle />
            <span className="ml-2">Sign in with Google</span>
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <FaTwitter />
            <span className="ml-2">Sign in with Twitter</span>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-green-600 hover:text-green-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
