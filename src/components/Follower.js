import React from 'react';
import {  BsFillArrowLeftSquareFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const followers = [
  {
    name: 'Shah Rukh Khan',
    username: 'srk',
    avatar: 'https://s3-alpha-sig.figma.com/img/fa41/053a/9152f2eb6167d4f86c8617f3a6dd2c14?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hISyb2q7~mwL8cOEfCepnFok384djr5LW1TWG9iOJN0LZa67ae-UHCD41K2~yXcr7rXCL4B24KMwZD47ymo7kPsG1aWDECrc21tbFZsk74g8~SXp5N8FG4zY27K2AaVYfj2Uii9IsR9sTcicnDc5xTNpao~V1~iCLZFYNqijGvZ168ruO3OAh-bnZr04syQ8GnSzQIq34l8kYNx8h4EgBDzNdO7Jy2fWgdCD1zyPWq4ITbGOMc0kApjCpW~4-2OQWDO0wYs4zGk9P2ygaNscaJPv39SqLZVRhhSsFngSG3YArfusoHsrbNDMBArGjjUC1IakaAEbK9EtkzXXmm1WMw__',
    following: false,
  },
  {
    name: 'Robert Downey Jr.',
    username: 'rdj',
    avatar: 'https://s3-alpha-sig.figma.com/img/c7d1/39b5/570da8f0635ad2540399832b2c4e4c3f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QiVzCj5jQATGOgODmMMLIoJTRX~T0XHpwbKPQjMe4lNqNhS0oJi5ppf5kBnhq~iEVQWP9VCQ6mr2~9P74ggGehsfsnRQ4gMgu4lNRi1KX-BUaUjjueWtV0pWmq8byajJHCVUOhLP-aEQGioeL-oKgxqVd7Un1EH9sYRrDsT1CapQ8Eyn2CLRgQE6G045rA-HJeLKZx9IfvVrQ9eXPvk1udRhNH8XIFn6u3pnp9RyEKmpwCUQ43LVGRVw~baqpuYpnIn-sH4wKIgXBp6-cIwBb~Ay-oX7uu5rwYssjsCaSseJxYqIJsBpT5iduvFoWKIeBrF1tcIV3~aWT9uWOateJw__',
    following: true,
  },
  {
    name: 'Tom Cruise',
    username: 'tomcruise',
    avatar: 'https://s3-alpha-sig.figma.com/img/6f58/889e/64b267f6681d45b9405519103ab2ad99?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFoQI-26rOxnfKeV1BKvsgr6J76mojrxVQbLLAReaz-HdOqJITwS-1br3Yu5CtZ9R1VBl0pm29CSGDjJ05cQnXSqv1XpZFSI4StdD1KcmvJ606RHjKE-QbJNRkDeyEolAArdUYkpBh2L1NBf0KNXlCTeQtpv39FKCAKiKwa8F2XdkPkSR9oOiKDmIfIfmbRF~33gBPiBFKIW8PctFJn5FuWtzzBBOb-ibbMD1Iq6a1rDIyx-ubwPrXnUVlCTMXu8U~chqPlljIFUyGAf~8Enz~WiAkc6RlcFvnH0ZMiHfG~IH8MGv76KWSspK3C1~7KoHL1eImO-su5Td-E6M45NOg__',
    following: false,
  },
  {
    name: 'Elizabeth',
    username: 'elizabeth',
    avatar: 'https://s3-alpha-sig.figma.com/img/32c6/fbd3/825e71805d7de0e02087bb3c62d00594?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRpcvzTrEHnBu8IiYrIP~Bnry-EYsg4Fxz39a8zy~k45eO0oNduElACZnRfD45WT7fLczMPSFUlubE2dVlFS5DEmtChHRTwVkIwJ69kWcf7LnH7e4eNC6NjZCgNPkRssCxNdROBU8i8Hzw8QKCriqzgW6I-cMNwivhUuS~PX7PE5~jbrkblbXpVvyRaiGLKos0o6bx7zXCEqT0nzAjZIZDAOufFqLHMEjRi-TUozu52h35LzktNu0G0Qg3nwVuKgVTDwXf5XKXmlLRPOjmaaX8~Y5doc~V7~bOW1h-lZrBMrFHNj~1Vvbig~KOBl0WIzTIcYGU~I~rpL~zqy~StARw__',
    following: false,
  },
  {
    name: 'Kate Winslet',
    username: 'katewinslet',
    avatar: 'https://s3-alpha-sig.figma.com/img/c7d1/39b5/570da8f0635ad2540399832b2c4e4c3f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QiVzCj5jQATGOgODmMMLIoJTRX~T0XHpwbKPQjMe4lNqNhS0oJi5ppf5kBnhq~iEVQWP9VCQ6mr2~9P74ggGehsfsnRQ4gMgu4lNRi1KX-BUaUjjueWtV0pWmq8byajJHCVUOhLP-aEQGioeL-oKgxqVd7Un1EH9sYRrDsT1CapQ8Eyn2CLRgQE6G045rA-HJeLKZx9IfvVrQ9eXPvk1udRhNH8XIFn6u3pnp9RyEKmpwCUQ43LVGRVw~baqpuYpnIn-sH4wKIgXBp6-cIwBb~Ay-oX7uu5rwYssjsCaSseJxYqIJsBpT5iduvFoWKIeBrF1tcIV3~aWT9uWOateJw__',
    following: false,
  },
  {
    name: 'Saoirse Hopper',
    username: 'saoirsehop',
    avatar: 'https://s3-alpha-sig.figma.com/img/6f58/889e/64b267f6681d45b9405519103ab2ad99?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFoQI-26rOxnfKeV1BKvsgr6J76mojrxVQbLLAReaz-HdOqJITwS-1br3Yu5CtZ9R1VBl0pm29CSGDjJ05cQnXSqv1XpZFSI4StdD1KcmvJ606RHjKE-QbJNRkDeyEolAArdUYkpBh2L1NBf0KNXlCTeQtpv39FKCAKiKwa8F2XdkPkSR9oOiKDmIfIfmbRF~33gBPiBFKIW8PctFJn5FuWtzzBBOb-ibbMD1Iq6a1rDIyx-ubwPrXnUVlCTMXu8U~chqPlljIFUyGAf~8Enz~WiAkc6RlcFvnH0ZMiHfG~IH8MGv76KWSspK3C1~7KoHL1eImO-su5Td-E6M45NOg__',
    following: true,
  },
  {
    name: 'Melina Charlton',
    username: 'melinacharlton',
    avatar: 'https://s3-alpha-sig.figma.com/img/c7d1/39b5/570da8f0635ad2540399832b2c4e4c3f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QiVzCj5jQATGOgODmMMLIoJTRX~T0XHpwbKPQjMe4lNqNhS0oJi5ppf5kBnhq~iEVQWP9VCQ6mr2~9P74ggGehsfsnRQ4gMgu4lNRi1KX-BUaUjjueWtV0pWmq8byajJHCVUOhLP-aEQGioeL-oKgxqVd7Un1EH9sYRrDsT1CapQ8Eyn2CLRgQE6G045rA-HJeLKZx9IfvVrQ9eXPvk1udRhNH8XIFn6u3pnp9RyEKmpwCUQ43LVGRVw~baqpuYpnIn-sH4wKIgXBp6-cIwBb~Ay-oX7uu5rwYssjsCaSseJxYqIJsBpT5iduvFoWKIeBrF1tcIV3~aWT9uWOateJw__',
    following: true,
  },
];

const FollowersList = () => {
  return (
    <div className="max-w-sm mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-6">
       <NavLink to="/menus">
       <button className="text-green-500">
< BsFillArrowLeftSquareFill  size={36}/>
        </button>
       </NavLink>
        <h1 className="text-xl font-semibold mr-24">Followers (4K)</h1>
        
      </div>
      <div class="border-t border-gray-300 my-4"></div>
      <ul className="space-y-8">
        {followers.map((follower, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src={follower.avatar}
                alt={`${follower.name} avatar`}
              />
              <div className="ml-3">
                <p className="font-semibold">{follower.name}</p>
                <p className="text-gray-500">@{follower.username}</p>
              </div>
            </div>
            <button
              className={`px-4 py-2 rounded-full text-sm ${
                follower.following
                  ? 'bg-gray-200 text-gray-700'
                  : 'bg-green-500 text-white'
              }`}
            >
              {follower.following ? 'Following' : 'Follow'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersList;
