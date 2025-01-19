import React, { useState, useEffect } from "react";

const ProfileDeatils = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Mock API call to fetch user data
    setTimeout(() => {
      setUserData({
        name: "anurag",
        location: "new delhi",
        bio: "i love to hangout with ppl who enjoyed every piece moment of life",
        phone: "+919999999999",
        trips: 69,
        rating: 4.8,
        impression: "96.7%",
      });
    }, 1000);
  }, []);

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg p-5 text-gray-800">
      <button className="absolute top-2 right-2 text-gray-600">
        &#10005;
      </button>
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <div className="rounded-full w-24 h-24 bg-gray-200 mb-4">
          {/* Placeholder for Image */}
          <img
            className="w-full h-full rounded-full object-cover"
            src="https://via.placeholder.com/96"
            alt="Profile"
          />
        </div>
        {/* Name and Location */}
        <h2 className="text-lg font-bold">{userData?.name || "Loading..."}</h2>
        <p className="text-sm text-gray-500">{userData?.location || "..."}</p>
        {/* Bio */}
        <p className="text-center text-sm italic mt-2">
          {userData?.bio || "Fetching user bio..."}
        </p>
        {/* Phone */}
        <p className="text-sm text-gray-700 mt-2">
          {userData?.phone || "Loading phone..."}
        </p>
      </div>
      {/* Metrics */}
      <div className="flex justify-between mt-4">
        <div className="text-center">
          <p className="font-semibold">{userData?.trips || "..."}</p>
          <p className="text-sm text-gray-500">Trips</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">{userData?.rating || "..."}</p>
          <p className="text-sm text-gray-500">Rating</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">{userData?.impression || "..."}</p>
          <p className="text-sm text-gray-500">Impression</p>
        </div>
      </div>
      {/* Reviews */}
      <div className="mt-4">
        <button className="text-blue-500 text-sm font-semibold">
          Reviews &gt;
        </button>
      </div>
    </div>
  );
};

export default ProfileDeatils;
