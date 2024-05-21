
import React from "react";
 import { BsChatSquareDots, BsFillArrowLeftSquareFill, BsHeart, BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

 const ProfileCard = () => {
   return (
     <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-6"> {/* Added mt-6 for top margin */}
       {/* Header Section */}
      <div className="flex items-center justify-between px-4 py-8 bg-white border-b border-gray-300"> {/* Increased py-6 for height */}
      <NavLink to="/chat">
      <button className="text-green-500 hover:text-green-600 focus:outline-none">
           <BsFillArrowLeftSquareFill size={30} />
        </button>
      </NavLink>
         <h4 className="text-gray-800 font-semibold">Profile</h4>
         <div className="flex items-center space-x-4">
           <button className="text-gray-500 hover:text-red-600 focus:outline-none">
             <BsHeart size={24} />
           </button>
           <button className="text-gray-500 hover:text-gray-600 focus:outline-none">
             <BsSearch size={24} />
           </button>
        </div>
      </div>

     <div className="px-6 py-4">
       <div className="flex justify-center">
         <img
            className="w-24 h-24 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg"
            alt="Tom Cruise"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Tom Cruise</h2>
          <p className="text-gray-600">@tomcruise</p>
          <div className="flex justify-center space-x-3 mt-6 px-6 m-6">
            <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
            <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
            <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
            <div className="h-8 w-8 bg-gray-400 rounded-full"></div>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="flex items-center text-black px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <BsChatSquareDots className="mr-2" />
              <h4 className="m-0">Messages</h4>
            </button>
           <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Follow
            </button>
          </div>
        </div>
       </div>
     <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
 <div className="flex justify-around space-x-4">
<div className="text-center bg-white p-4 border border-gray-300 rounded-lg">
  <h3 className="text-lg font-semibold text-gray-800">6.3k</h3>
  <p className="text-gray-600">Followers</p>
</div>
<div className="text-center bg-white p-4 border border-gray-300 rounded-lg">
  <h3 className="text-lg font-semibold text-gray-800">572</h3>
  <p className="text-gray-600">Post</p>
</div>
<div className="text-center bg-white p-4 border border-gray-300 rounded-lg">
  <h3 className="text-lg font-semibold text-gray-800">2.5k</h3>
  <p className="text-gray-600">Following</p>
</div>
</div>
</div>  
      
      <div className="px-6 py-4">
        <div className="flex space-x-4">
          <img
            className="w-1/3 h-20 object-cover rounded-lg"
            src="https://s3-alpha-sig.figma.com/img/a94b/08df/71a2df67ce174c0bc34a8eabbb9759ca?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZLuuhz8DeIsNxKc8Qnx86NHyGeM~t-WESqr8ujc2~yPC-8vtdE4dKvTbUedFPi0th7pI0BKt9-0Uz1XnRlTZyBKw1RbIFcc0Uqhd1iW~GxgWeqT0aPrCe~z4NsLkSx8bzEjNzS5oFB~bBd43OT1gXvLJRYwE0WPSuilpe-3DEsPoGcaLQ56GF94mMa2zd6XNX9lm4G1SxLff-7wRaWyCdwQSM06VJpwUKX7Qa3Gcj-Utk-8erhM2YWMzeA0d~XaitxPtZdrpHlhbfSe~HhNGCipgIINV16DditJwwNiRissbJ3JdWk68I40WKflJVqN3MV8r~PYVSiKEBezASjd8yA__"
            alt="Tom Cruise 1"
          />
          <img
            className="w-1/3 h-20 object-cover rounded-lg"
            src="https://s3-alpha-sig.figma.com/img/6c77/c78f/ab99510d7c798e9182966b47f996f8eb?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TD1H-~-rpNqoOV3rXP72C1Yc3HMNqnQZ0Jl7i49tzZA9A~RGq9Li5-K3VQg84M94AU63S9MiWez3f4baxUgjkqIswKmFVpApePDZSDjXP53uydOtOQyiC-U-HW3dTkn-1bZDvIUZIGYUVWVkksJkK3u9qlFyqkEEFXjvWmIdJ1ZQ9h7kRQaFRWD2dp4gVc3eKiNmVTPQR-9M1aN0h~vES4HFmPG9WosXbDwc2BiynNMCiw6TLdXKW29g5TOKYF7kBAslZ2QCFSekn00r9Q1nu2RNSQX3dcMbNj2c4T3V~KWBEfZnov6jphQWKtxvllCbsoxBuIA11C95EZvXTBy1hQ__"
            alt="Tom Cruise 2"
          />
          <img
            className="w-1/3 h-20 object-cover rounded-lg"
            src="https://s3-alpha-sig.figma.com/img/9548/9887/8c164225ed77ca2e2b96a490ded58a9c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FVFX0bJ~1TIrY8avY7A2uTU3O-a2CfkPvxF1~qMeUq80Z6Wel6G0rQISdi8G67cYVPkJPvc0vopUXArZdIBBJm5MCcC4ycDdXt8DXE-xUMlRJZmQDbrzwODsOUujmaaiqThWjWD37ZY6xJKG3MkZrEr~jPJSO4CqSZjwNjuXpj8b~RfgeTsqEAiPR-J3IX2EpGx9-HaHctOIrcO8IUVR5zlyAcb787VMlds6UEuZxuttCNbGBioWmWIt8Qinh9v9oiAvZNiXPunCh5tI9yrX6A5tYgwJM-ZeOgip14Hgl4lvNj1P~w~3JROsd7oUAf4ryZ71Z4mde0TA2NUhybWOgg__"
            alt="Tom Cruise 3"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;









