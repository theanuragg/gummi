import React from 'react';

const ProfileList = ({ profiles }) => {
  return (
    <div className="bg-white w-96 rounded-lg shadow-lg p-4">
      <div className="text-center text-gray-500 font-medium mb-4">
        Explore top-rated guides available for rent<br />your perfect local expert awaits!
      </div>
      <div className="space-y-2">
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <div
              key={profile._id.$oid} // Use the unique _id as the key for each profile
              className="border rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="font-bold text-gray-800">{profile.username}</h2>
              <p className="text-sm text-gray-600">Location: {profile.location}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No profiles available</p>
        )}
      </div>
    </div>
  );
};

export default ProfileList;
