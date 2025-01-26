import React, { useState } from "react";
import axios from "axios";
import Map from "../Maps/Map";
import Search from '../components/ui/Search';
import Button from "../components/ui/Button";
import Avatars from '../components/ui/Avators';
import ProfileDeatils from "../components/ui/ProfileDeatils";

const Ride = () => {
  const [location, setLocation] = useState(""); // To hold user-entered location
  const [captains, setCaptains] = useState([]); // To hold captains fetched from the API
  const [loading, setLoading] = useState(false); // To indicate loading state
  const [error, setError] = useState(""); // To handle errors
  const [showResults, setShowResults] = useState(false); // To control visibility of results
  const [selectedCaptain, setSelectedCaptain] = useState(null); // To hold the selected captain

  const userData = {
    bio: "I love to hang out with people who enjoy every moment of life.",
    phone: "+919999999999",
    trips: 69,
    rating: 4.8,
    impression: "96.7%",
  };

  const fetchCaptains = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_API}/captains/ride`,
        {
          params: { location }, // Pass the location as a query parameter
          headers: {
            Authorization: `Bearer ${localStorage.getItem("captain-token")}`, // Replace with your actual token
            "Content-Type": "application/json",
          },
        }
      );
      setCaptains(response.data); // Update captains with the response data
      setShowResults(true); // Show the results container
    } catch (error) {
      setError("Error fetching captains. Please try again."); // Handle error
      console.error("Error fetching captains:", error);
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const handleSearch = () => {
    if (location.trim()) {
      fetchCaptains(); // Fetch captains when the search button is clicked
    } else {
      setError("Please enter a location.");
    }
  };

  const handleCaptainClick = (captain) => {
    setSelectedCaptain(captain); // Set the clicked captain as the selected one
  };


  return (
    <>
      <div className="relative h-screen">
        <Map className="absolute top-0 left-0 w-full h-full" />
        <div className="absolute left-2 top-2 flex items-center space-x-2 z-10">
          <Search
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="absolute top-20 left-4 bg-white w-60 rounded-lg shadow-lg p-4 z-10">
            <div className="text-center text-gray-500 font-medium mb-4">
              guides available for rent<br />
            </div>
            <div className="space-y-2 max-h-64 overflow-y-scroll">
              {captains.length > 0 ? (
                captains.map((captain) => (
                  <div
                    key={captain._id}
                    className="border rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
                    onClick={() => handleCaptainClick(captain)}
                  >
                    <h2 className="font-bold text-gray-800">{captain.username}</h2>
                    <p className="text-sm text-gray-600">{captain.location}</p>
                  </div>
                ))
              ) : loading ? (
                <p className="text-center text-gray-600">Loading captains...</p>
              ) : error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : (
                <p className="text-center text-gray-600">No Guider available</p>
              )}
            </div>
          </div>
        )}
        {selectedCaptain && (
          <div className="absolute right-2 top-6 z-10">
            <div className="max-w-sm bg-white rounded-lg shadow-lg p-5 text-gray-800">
              <button
                className="absolute top-2 right-2 text-gray-600"
                onClick={() => setUserData(null)} // Close the profile details
              >
                &#10005;
              </button>
              <div className="flex flex-col items-center">
                {/* Profile Picture */}
                <div className="rounded-full w-24 h-24 bg-gray-200 mb-4">
                  <Avatars />
                </div>
                {/* Name and Location */}
                <h2 className="text-lg font-bold">{selectedCaptain.username|| "Loading..."}</h2>
                <p className="text-sm text-gray-500">{selectedCaptain.location || "..."}</p>
                {/* Bio */}
                <p className="text-center text-sm italic mt-2">
                  {userData?.bio || "Fetching user bio..."}
                </p>
                {/* Phone */}
                <p className="text-sm text-gray-700 mt-2">
                  {selectedCaptain.phoneno || "Loading phone..."}
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
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Ride;



{/* <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Search Captains by Location</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)} // Update location state with user input
          style={{
            padding: "10px",
            width: "80%",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 15px",
            marginLeft: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {captains.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {captains.map((captain) => (
              <li
                key={captain._id} // Use a unique identifier for the key
                style={{
                  padding: "10px",
                  marginBottom: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              >
                <strong>{captain.username}</strong>
                <p>Email: {captain.email}</p>
                <p>Location: {captain.location}</p>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No captains found for the given location.</p>
        )}
      </div>
    </div> */}