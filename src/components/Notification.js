import React from 'react';
import { BsSearch } from 'react-icons/bs'; 
import { MdCheck } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const notifications = [
  {
    id: 1,
    name: 'Aarush Galloway',
    action: 'Shared your post',
    time: '52 min ago',
    avatar: 'https://s3-alpha-sig.figma.com/img/043c/39bc/09dd82dfd6a572cd5caad060012fec5a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iTZHZgDQ6o14HD3LYlELurXMbXTvxGgfp11f5tJQ-XCA-CZIJ9cHx~Ie~V-me~XNKYi~PfK1m~-1Jpt3NTOSU964YX5Lc0La-QEAUnuaCDDgklV-Qw-2nBAGgz0a1p~MDOiLqBiZB1dKZG2nOi86Egk2IQeZErbYxt3Zf9PILZgLB7bT9TNJjhdXCSaARrMUkbzkGer9ugdi4F9ErDINd8kv1qJXkVkd2sb8YnGkLVhG~ksO8p1t1F-IrHhkSqURCcdvqcX1zA0fu5fFuwgy5lCLcrrAwRM-b4cJwGr-Ti0n4r9JuxSOGppurKBJ81Z-K37llJedofFhYD4FJcCaew__',
  },
  {
    id: 2,
    name: 'Arla Potter',
    action: 'Liked your profile photo',
    time: '1 h ago',
    avatar: 'https://s3-alpha-sig.figma.com/img/2469/38c3/f62a0a15bc2f00ba94cf211edbea5815?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJEIKbJvzxtG1P3IPi-gAWZl-rhP-XTFdjK5BmXXk65NMmuv7LJq4Zd1Wq4K~UvO65vcJLBVk9lrMoACiSIXIC6DDJFI5o~omuegMHMhvnqMzU-b2DsGJlaKLhPkdmmMbTtP2lMEcKM2ZCn8--uoU9Aox65u23okT1Hl4PuiVRA9VDapfZjnq-fnYfRyg9V427M-YGzKThpevkXKs5lqMs8SandqoPsCVLXd93SNCO9p90hsPy6123QSqXGMRaq~M~PvYoIKmYf5P56iV8mv6WkDt4TK~-jcx1kkLE5V8okdmERr5QqRytCGwOoiClG1yjZV-mNfEEEexmJkhKNrtQ__',
  },
  {
    id: 3,
    name: 'Arthur Aguilar',
    action: 'Liked your photo',
    time: '2 h ago',
    avatar: 'https://s3-alpha-sig.figma.com/img/2469/38c3/f62a0a15bc2f00ba94cf211edbea5815?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJEIKbJvzxtG1P3IPi-gAWZl-rhP-XTFdjK5BmXXk65NMmuv7LJq4Zd1Wq4K~UvO65vcJLBVk9lrMoACiSIXIC6DDJFI5o~omuegMHMhvnqMzU-b2DsGJlaKLhPkdmmMbTtP2lMEcKM2ZCn8--uoU9Aox65u23okT1Hl4PuiVRA9VDapfZjnq-fnYfRyg9V427M-YGzKThpevkXKs5lqMs8SandqoPsCVLXd93SNCO9p90hsPy6123QSqXGMRaq~M~PvYoIKmYf5P56iV8mv6WkDt4TK~-jcx1kkLE5V8okdmERr5QqRytCGwOoiClG1yjZV-mNfEEEexmJkhKNrtQ__',
  },
  {
    id: 4,
    name: 'Addie Barrera',
    action: 'Commended your post',
    time: '3 h ago',
    avatar: 'https://s3-alpha-sig.figma.com/img/2469/38c3/f62a0a15bc2f00ba94cf211edbea5815?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJEIKbJvzxtG1P3IPi-gAWZl-rhP-XTFdjK5BmXXk65NMmuv7LJq4Zd1Wq4K~UvO65vcJLBVk9lrMoACiSIXIC6DDJFI5o~omuegMHMhvnqMzU-b2DsGJlaKLhPkdmmMbTtP2lMEcKM2ZCn8--uoU9Aox65u23okT1Hl4PuiVRA9VDapfZjnq-fnYfRyg9V427M-YGzKThpevkXKs5lqMs8SandqoPsCVLXd93SNCO9p90hsPy6123QSqXGMRaq~M~PvYoIKmYf5P56iV8mv6WkDt4TK~-jcx1kkLE5V8okdmERr5QqRytCGwOoiClG1yjZV-mNfEEEexmJkhKNrtQ__',
  },
  {
    id: 5,
    name: 'Anne Southern',
    action: 'added photo in group Awesome UI Kit',
    time: '4 h ago',
    avatar: 'https://s3-alpha-sig.figma.com/img/2469/38c3/f62a0a15bc2f00ba94cf211edbea5815?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJEIKbJvzxtG1P3IPi-gAWZl-rhP-XTFdjK5BmXXk65NMmuv7LJq4Zd1Wq4K~UvO65vcJLBVk9lrMoACiSIXIC6DDJFI5o~omuegMHMhvnqMzU-b2DsGJlaKLhPkdmmMbTtP2lMEcKM2ZCn8--uoU9Aox65u23okT1Hl4PuiVRA9VDapfZjnq-fnYfRyg9V427M-YGzKThpevkXKs5lqMs8SandqoPsCVLXd93SNCO9p90hsPy6123QSqXGMRaq~M~PvYoIKmYf5P56iV8mv6WkDt4TK~-jcx1kkLE5V8okdmERr5QqRytCGwOoiClG1yjZV-mNfEEEexmJkhKNrtQ__',
  },
  {
    id: 6,
    name: 'Brenden Ramirez',
    action: 'Liked your post',
    time: '5 h ago',
    avatar: 'https://s3-alpha-sig.figma.com/img/2469/38c3/f62a0a15bc2f00ba94cf211edbea5815?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJEIKbJvzxtG1P3IPi-gAWZl-rhP-XTFdjK5BmXXk65NMmuv7LJq4Zd1Wq4K~UvO65vcJLBVk9lrMoACiSIXIC6DDJFI5o~omuegMHMhvnqMzU-b2DsGJlaKLhPkdmmMbTtP2lMEcKM2ZCn8--uoU9Aox65u23okT1Hl4PuiVRA9VDapfZjnq-fnYfRyg9V427M-YGzKThpevkXKs5lqMs8SandqoPsCVLXd93SNCO9p90hsPy6123QSqXGMRaq~M~PvYoIKmYf5P56iV8mv6WkDt4TK~-jcx1kkLE5V8okdmERr5QqRytCGwOoiClG1yjZV-mNfEEEexmJkhKNrtQ__',
  },
  {
    id: 7,
    name: 'Brax Stott',
    action: 'Liked your comments',
    time: '6 h ago',
    avatar: 'https://s3-alpha-sig.figma.com/img/2469/38c3/f62a0a15bc2f00ba94cf211edbea5815?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJEIKbJvzxtG1P3IPi-gAWZl-rhP-XTFdjK5BmXXk65NMmuv7LJq4Zd1Wq4K~UvO65vcJLBVk9lrMoACiSIXIC6DDJFI5o~omuegMHMhvnqMzU-b2DsGJlaKLhPkdmmMbTtP2lMEcKM2ZCn8--uoU9Aox65u23okT1Hl4PuiVRA9VDapfZjnq-fnYfRyg9V427M-YGzKThpevkXKs5lqMs8SandqoPsCVLXd93SNCO9p90hsPy6123QSqXGMRaq~M~PvYoIKmYf5P56iV8mv6WkDt4TK~-jcx1kkLE5V8okdmERr5QqRytCGwOoiClG1yjZV-mNfEEEexmJkhKNrtQ__',
  },
];

const NotificationPanel = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="p-4 bg-white border-b flex flex-col mt-4" style={{ minHeight: '100px' }}>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
          <NavLink to='/menus'>
          <img
              className="w-16 h-16 rounded-full circle"
              src="https://s3-alpha-sig.figma.com/img/9ffb/c5ae/c9c30c0248c3731569b1f7170833a931?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j9RisR6Jq6Iv1qyvexn6sj1CV9c2C~A0SzAlV212QXwnKnRzDEKRp7qmbtT3NUyiLjHBK6vwkwSWwHpCPHadMVytCtKC8uJaSiDyP3N~raJbV4uMEgjCC1P4OYbWl95dXiDGp3tbnPXOfGB0RdLrWPH32zSVUJmc4~Uz-70uSfdc0LcsavOOLd26BhV1DPsouzZBDKg5V7J98RI2mPrDcBy1THyd9230WvKj7agEP1p0jxaffNl9vmRalKf0hO8JBBnoiqz1lASA1K~tdZmDzkDfk440Q6cF8KTHFPhqdQrbfXeG6rp2cDxnE3Qa3UreEk2HwW~bCQ66iOE6QhRUsA__"
              alt="User"
            />
          </NavLink>
          </div>
          <button className="text-gray-500 hover:text-gray-600 focus:outline-none">
            <BsSearch size={24} />
          </button>
        </div>
        <div className="flex items-center mt-2">
          <h2 className="text-lg font-semibold">Notification</h2>
          <span className="ml-2 text-sm text-gray-500 bg-green-100 px-2 py-1 rounded-full">35</span>
        </div>
      </div>

      <div className="px-4 py-2 bg-gray-100 border-b">
        <div className="flex justify-between">
          <button className="text-sm font-semibold text-gray-700">Show all</button>
          <button className="text-sm font-semibold text-gray-700">Mark all as read</button>
        </div>
      </div>

      <div>
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-center p-4 border-b hover:bg-gray-100">
            <img
              className="w-10 h-10 rounded-full"
              src={notification.avatar}
              alt={notification.name}
            />
            <div className="ml-4 flex-grow">
              <p className="text-sm">
                <span className="font-semibold">{notification.name}</span>{' '}
                <span className="text-gray-600">{notification.action}</span>
              </p>
              <p className="text-xs text-gray-500">{notification.time}</p>
            </div>
            {notification.id === 2 && (
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
               <MdCheck style={{fontSize:"28px"}}/> Read
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;
