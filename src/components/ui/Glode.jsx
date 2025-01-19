import React from 'react';

function GlobeCard  ()  {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[400px] h-[300px] bg-white rounded-lg shadow-lg p-6">
        {/* Title */}
        <h1 className="text-4xl font-semibold text-gray-800 text-center">Globe</h1>

        {/* Globe Design */}
        <div className="relative w-full h-full mt-4 flex justify-center">
          <div className="w-56 h-56 bg-gray-200 rounded-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-full h-full text-gray-400"
            >
              {/* Dotted Globe */}
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1" cy="1" r="1" className="text-gray-500 fill-current" />
                </pattern>
              </defs>
              <circle
                cx="256"
                cy="256"
                r="200"
                fill="url(#dots)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
};

export default GlobeCard; 