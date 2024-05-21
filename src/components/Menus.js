import React from 'react';
import { TbCircleChevronRight } from "react-icons/tb"
import { NavLink } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div className="max-w-sm mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="https://s3-alpha-sig.figma.com/img/9ffb/c5ae/c9c30c0248c3731569b1f7170833a931?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j9RisR6Jq6Iv1qyvexn6sj1CV9c2C~A0SzAlV212QXwnKnRzDEKRp7qmbtT3NUyiLjHBK6vwkwSWwHpCPHadMVytCtKC8uJaSiDyP3N~raJbV4uMEgjCC1P4OYbWl95dXiDGp3tbnPXOfGB0RdLrWPH32zSVUJmc4~Uz-70uSfdc0LcsavOOLd26BhV1DPsouzZBDKg5V7J98RI2mPrDcBy1THyd9230WvKj7agEP1p0jxaffNl9vmRalKf0hO8JBBnoiqz1lASA1K~tdZmDzkDfk440Q6cF8KTHFPhqdQrbfXeG6rp2cDxnE3Qa3UreEk2HwW~bCQ66iOE6QhRUsA__"
          alt="User Avatar"
        />
 <div>
            <h2 className="text-xl font-semibold">Morsalin Nur</h2>
            <p className="text-gray-500">@morsalin.nur</p>
          </div>
      </div>
      <NavLink to="/follower">
      <button className="text-gray  px-2 py-2 rounded-full">
      <TbCircleChevronRight size={30}/>
        </button>
      </NavLink>
      </div>

   

      <div className="px-6 py-4 bg-white-100 border-t border-gray-200">
 <div className="flex justify-around space-x-4">
<div className="text-center bg-white p-4 border border-gray-300 rounded-lg">
  <h3 className="text-lg font-semibold text-gray-800">6.3k</h3>
  <p className="text-gray-600">Followers</p>
</div>
<div className="text-center bg-white p-5 border border-gray-300 rounded-lg">
  <h3 className="text-lg font-semibold text-gray-800">572</h3>
  <p className="text-gray-600">Posts</p>
</div>
<div className="text-center bg-white p-4 border border-gray-300 rounded-lg">
  <h3 className="text-lg font-semibold text-gray-800">2.5k</h3>
  <p className="text-gray-600">Following</p>
</div>
</div>
</div>  

      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-center">
         <p className="text-gray-700">Notification</p>
          <span className="text-white bg-green-500 px-2 py-1 rounded-full text-sm ml-40">35</span>
         <NavLink to="/notification">
         <button className="text-gray  px-2 py-2 rounded-full">
      <TbCircleChevronRight size={30}/>
        </button>
         </NavLink>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Friends</p>
          <span className="text-gray-400"></span>
          <button className="text-gray  px-2 py-2 rounded-full">
      <TbCircleChevronRight size={30}/> 
        </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Messages</p>
          <span className="text-white bg-green-500 px-2 py-1 rounded-full text-sm ml-44">2</span>
        <NavLink to="/chat">
        <button className="text-gray  px-2 py-2 rounded-full">
      <TbCircleChevronRight size={30}/>
        </button>
        </NavLink>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Albums</p>
          <span className="text-gray-400"></span>
          <button className="text-gray  px-2 py-2 rounded-full">
      <TbCircleChevronRight size={30}/>
        </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Favorites</p>
          <span className="text-gray-400"></span>
          <button className="text-gray  px-2 py-2 rounded-full">
      <TbCircleChevronRight size={30}/>
        </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Privacy Policy</p>
          <span className="text-gray-400"></span>
          <button className="text-gray  px-2 py-2 rounded-full">
      <TbCircleChevronRight size={28}/>
        </button>
        </div>
      </div>

     <NavLink to="/login">
     <button className="w-full mt-6 bg-green-100 text-green-700 py-2 full">
        Log out
      </button>
     </NavLink>
    </div>
  );
};

export default UserProfile;


