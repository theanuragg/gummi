// src/components/Button.jsx
import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
