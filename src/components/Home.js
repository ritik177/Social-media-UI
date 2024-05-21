import React from 'react';
import { NavLink } from 'react-router-dom';

function ConnectPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src="https://s3-alpha-sig.figma.com/img/481c/cbfa/52fda731dcb2c37bd4f529455d6d4c24?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qnzBcaX7ZuoMcbRHpIGiliJ8ptYOobygzERzFvA0zguAdUiapuXiRpKwpNZGKo2TZ8mXeVwFHxAj8jnaYkCI9M~c6zpEWhhRf9QgPtgYNGGLcQ5XPcud~nNQa-Rsj9Baxpl48otpQpjUiTV1Tzj5oBlvZoD385tNdwK1Skugb6AVwJetssjKT-NEHclhfhAUjUvlD7mRAUMeXupADyPhNByOXGoTGSY7ImQGyt4rpfUMpKDjOA7M90SVNcIVl-h0ViO9mWB3~pGTJ6YOuK7a12nTJyZxkIZA41vmLUb0HRYUGQ6RygXBZxwdYRdWp5HmAn3aqvNxe-HsFAAnwPxahw__" // Replace with the actual image URL
          alt="Connect"
          className="w-full h-80 object-cover" // Set height to 48 (equivalent to 12rem)
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800">Let’s connect with each other</h1>
          <p className="text-center text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          </p>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-8 bg-gray-300 rounded-full mx-1"></div>
            <div className="h-1 w-8 bg-gray-300 rounded-full mx-1"></div>
            <div className="h-1 w-8 bg-gray-300 rounded-full mx-1"></div>
          </div>
          <NavLink to="/login">
            <button className="mt-6 w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none">
              Get started
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ConnectPage;
