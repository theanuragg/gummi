// import React from "react";
// import GridLayout from "react-grid-layout";
// import "react-grid-layout/css/styles.css";
// import "react-resizable/css/styles.css";

// const CaptainDashboard = () => {
//   const layout = [
//     { i: "1", x: 0, y: 0, w: 2, h: 2, minW: 1, minH: 1 },
//     { i: "2", x: 2, y: 0, w: 2, h: 2, minW: 1, minH: 1 },
//     { i: "3", x: 4, y: 0, w: 2, h: 2, minW: 1, minH: 1 },
//   ];

//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <GridLayout
//         className="layout"
//         layout={layout}
//         cols={12}
//         rowHeight={30}
//         width={1200}
//         draggableHandle=".drag-handle"
//         resizable
//         compactType={null} // Allows free movement without snapping to compact positions
//         preventCollision={false} // Prevents forced collision for dynamic resizing
//       >
//         <div
//           key="1"
//           style={{
//             border: "1px solid #ccc",
//             background: "#f9f9f9",
//             position: "relative",
//           }}
//         >
//           <div
//             className="drag-handle"
//             style={{ padding: "5px", background: "#ddd", cursor: "move" }}
//           >
//             Drag me!
//           </div>
//           <p>Card 1</p>
//         </div>

//       </GridLayout>
//     </div>
//   );
// };

// export default CaptainDashboard;

import React, { useState } from 'react';
import Avatar from 'react-nice-avatar';

const CaptainDashboard = () => {

  // State for avatar customization
  const [selectedFaceColor, setSelectedFaceColor] = useState("f5c6d0");
  const [selectedEarSize, setSelectedEarSize] = useState("small");
  const [selectedHairColor, setSelectedHairColor] = useState("brown");
  const [selectedShirt, setSelectedShirt] = useState("v-neck");
  const [selectedEyeShape, setSelectedEyeShape] = useState("square");
  const [selectedAccessories, setSelectedAccessories] = useState("sunglasses");
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the card open/close


  const [nickname, setNickname] = useState("");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className="min-h-screen bg-white p-6">
      <header className="flex justify-end">
        <button className="p-2 bg-gray-200 rounded-full"
          onClick={toggleCard}
        >
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
          </svg>
          {isOpen ? "" : ""}
        </button>
      </header>
      {isOpen && (
        <div
          className="absolute top-1/4 bg-white rounded-lg shadow-lg p-4 space-y-4 w-80"
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-md shadow hover:bg-gray-200"
            >
              someone visit your profile
            </div>
          ))}
        </div>
      )}


      <main className="max-w-5xl mx-auto mt-8">
        {/* Profile Section */}
        <div className="flex items-center gap-12 mb-10">
          <div className="w-20 h-20  rounded-full">
            <Avatar
              style={{ width: 100, height: 100 }}
              faceColor={selectedFaceColor}
              earSize={selectedEarSize}
              hairColor={selectedHairColor}
              shirt={selectedShirt}
              eyeShape={selectedEyeShape}
              accessories={selectedAccessories}
            />
          </div>
          <div>
            <label htmlFor="nickname" className="block font-medium">
              Nickname
            </label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              placeholder="Enter your nickname"
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Welcome Section */}
        <h1 className="text-4xl font-bold mb-6">Welcome to Your Guider Dashboard</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          <div className="bg-white shadow p-4 rounded-lg text-center border border-gray-400 hover:bg-slate-50">
            <h2 className="text-lg font-medium">Total Trips</h2>
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm text-green-500">+10% from last month</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg text-center border border-gray-400 hover:bg-slate-50">
            <h2 className="text-lg font-medium">Rating</h2>
            <p className="text-2xl font-bold">4.8 ★</p>
            <p className="text-sm text-green-500">+20 new this week</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg text-center border border-gray-400 hover:bg-slate-50">
            <h2 className="text-lg font-medium">Total Revenue</h2>
            <p className="text-2xl font-bold">₹ 5,231</p>
            <p className="text-sm text-green-500">+15% from last month</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg text-center border border-gray-400 hover:bg-slate-50 ">
            <h2 className="text-lg font-medium">Pending Requests</h2>
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-red-500">3 require immediate action</p>
          </div>
        </div>

        {/* Upcoming Tours */}
        <div className="mt-8 bg-white shadow p-4 rounded-lg">
          <h2 className="text-lg font-medium mb-4">Upcoming Tours</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>City Walking Tour</span>
              <span>Tomorrow, 10:00 AM</span>
            </li>
            <li className="flex justify-between">
              <span>Museum Guide</span>
              <span>Jul 18, 2:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Food Tasting Experience</span>
              <span>Jul 20, 6:00 PM</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};


export default CaptainDashboard;


