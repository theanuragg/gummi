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

import React, { useState } from "react";
import Avatar from "react-nice-avatar";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const GuiderDashboard = () => {
  // State for avatar customization
  const [selectedFaceColor, setSelectedFaceColor] = useState("f5c6d0");
  const [selectedEarSize, setSelectedEarSize] = useState("small");
  const [selectedHairColor, setSelectedHairColor] = useState("brown");
  const [selectedShirt, setSelectedShirt] = useState("v-neck");
  const [selectedEyeShape, setSelectedEyeShape] = useState("square");
  const [selectedAccessories, setSelectedAccessories] = useState("sunglasses");

  // State for nickname and conditional updates
  const [nickname, setNickname] = useState("");
  const [tempNickname, setTempNickname] = useState(""); // To hold the value before submitting

  // State for toggling notifications card
  const [isOpen, setIsOpen] = useState(false);

  // Toggle notification card
  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  // Handle nickname input change
  const handleNicknameInput = (e) => {
    setTempNickname(e.target.value);
  };

  // Update nickname when submitted
  const handleNicknameSubmit = () => {
    setNickname(tempNickname);
  };

  return (
    <div className="min-h-screen bg-white p-6 relative">
      {/* Header */}
      <header className="flex justify-end">
        <button
          className="p-2 bg-gray-200 rounded-full"
          onClick={toggleCard}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
          </svg>
        </button>
      </header>

      {/* Notification Card */}
      {isOpen && (
        <div className="absolute top-16 right-14 bg-white rounded-lg shadow-lg p-4 space-y-4 w-80 max-h-96 overflow-y-scroll">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-md shadow hover:bg-gray-200"
            >
              someone {index + 1} viewed your profile
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-5xl mx-auto mt-8">
        {/* Profile Section */}
        <div className="flex items-center gap-12 mb-10">
          <div className="w-20 h-20 rounded-full">
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
            <div className="flex gap-2">
              <input
                id="nickname"
                type="text"
                value={tempNickname}
                onChange={handleNicknameInput}
                placeholder="Enter your nickname"
                className="w-full p-2 border rounded-lg"
              />
              <Button
                onClick={handleNicknameSubmit}
              >
                Update
              </Button>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <h1 className="text-4xl font-bold mb-6">
          {nickname ? `Welcome, ${nickname}` : 'Welcome to Your Guider Dashboard'}
        </h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
          <div className="bg-white shadow p-4 rounded-lg text-center border border-gray-400 hover:bg-slate-50">
            <h2 className="text-lg font-medium">Pending Requests</h2>
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-red-500">3 require immediate action</p>
          </div>
        </div>

        {/* Upcoming Tours */}

        <div className="mt-8 bg-white shadow-lg p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Upcoming Tours</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="text-lg font-medium text-gray-900">Purani Delhi</span>
                <p className="text-sm text-gray-500">Discover hidden gems in the street.</p>
              </div>
              <span className="text-sm font-medium text-blue-600">Tomorrow, 10:00 AM</span>
            </li>
            <li className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="text-lg font-medium text-gray-900">Craft Museum</span>
                <p className="text-sm text-gray-500">Explore history with a guide.</p>
              </div>
              <span className="text-sm font-medium text-blue-600">Jul 18, 2:00 PM</span>
            </li>
            <li className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="text-lg font-medium text-gray-900">Food  Experience</span>
                <p className="text-sm text-gray-500">Prelicious, Hunger strike</p>
              </div>
              <span className="text-sm font-medium text-blue-600">Jul 20, 6:00 PM</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default GuiderDashboard;
