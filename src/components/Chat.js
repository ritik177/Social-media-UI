import React from 'react';
import { BsFillSendFill, BsTelephoneFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const messages = [
  {
    sender: 'me',
    text: "Hey! How are you? It's been a while. How is your travel to UK?",
    time: '10 sec ago',
  },
  {
    sender: 'tom',
    text: 'Hey too!',
    time: '10 sec ago',
  },
  {
    sender: 'tom',
    text: "It's great, UK is awesome, especially London. New job is good so far! How about you?",
    time: '10 sec ago',
  },
  {
    sender: 'me',
    text: "I'm fine, I'm thinking about a new project. I want to open an online store.",
    time: '10 sec ago',
  },
  {
    sender: 'me',
    text: "But I don't know what to sell. Maybe I will sell stones and water.",
    time: '10 sec ago',
  },
  {
    sender: 'tom',
    text: "Yeah it's a great idea, you know - everyone needs water, I don't know about stones xD",
    time: '10 sec ago',
  },
];

const ChatComponent = () => {
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
       <NavLink to="/menus">
       <button className="text-green-500">
            <BsFillArrowLeftSquareFill size={30} />
          </button>
       </NavLink>
          <div className="relative ml-4">
           <NavLink to="/profile">
           <img
              className="w-10 h-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg"
              alt="User Avatar"
            />
           </NavLink>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
          </div>
        </div>
      
       <div className="flex items-center ml-4">
          <p className="font-semibold mr-44">@tomcruise</p>
        </div>
       
        <button className="text-green-500">
          <BsTelephoneFill size={24} />
        </button>
      </div>
      <p className="text-gray-500 mb-4">Last active: 10 sec ago</p>
      <div class="border-t border-gray-300 my-4"></div>


      <div className="space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex items-end ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            {message.sender !== 'me' && (
              <img
                className="w-8 h-8 rounded-full mr-2"
            src="https://s3-alpha-sig.figma.com/img/a94b/08df/71a2df67ce174c0bc34a8eabbb9759ca?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZLuuhz8DeIsNxKc8Qnx86NHyGeM~t-WESqr8ujc2~yPC-8vtdE4dKvTbUedFPi0th7pI0BKt9-0Uz1XnRlTZyBKw1RbIFcc0Uqhd1iW~GxgWeqT0aPrCe~z4NsLkSx8bzEjNzS5oFB~bBd43OT1gXvLJRYwE0WPSuilpe-3DEsPoGcaLQ56GF94mMa2zd6XNX9lm4G1SxLff-7wRaWyCdwQSM06VJpwUKX7Qa3Gcj-Utk-8erhM2YWMzeA0d~XaitxPtZdrpHlhbfSe~HhNGCipgIINV16DditJwwNiRissbJ3JdWk68I40WKflJVqN3MV8r~PYVSiKEBezASjd8yA__"
           
                alt="User Avatar"
              />
            )}
            <div className={`max-w-xs p-3 rounded-lg ${message.sender === 'me' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
              <p>{message.text}</p>
            </div>
            {message.sender === 'me' && (
              <img
                className="w-8 h-8 rounded-full ml-2"
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg"
                alt="My Avatar"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center mt-4">
        <input
          type="text"
          className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none"
          placeholder="Say something"
        />
        <button className="p-3 m-1 bg-green-500 text-white rounded-full">
          <BsFillSendFill />
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
