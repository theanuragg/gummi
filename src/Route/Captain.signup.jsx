// src/pages/SignUp.jsx
import React, { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCaptain } from '../context/CaptainContext';

const CaptainSignUp = () => {
  const { setCaptain } = useCaptain();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [adharno, setAdharno] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const captaindata = {
        username, email, password, phoneno, adharno, location
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_API}/captains/register`,
        captaindata
      );
      
      if (response.data && response.data.token) {
        // Store token
        localStorage.setItem('captain-token', response.data.token);
        
        // Verify token was stored
        const storedToken = localStorage.getItem('captain-token');
        if (!storedToken) {
          throw new Error('Failed to store authentication token');
        }

        // Set captain data
        setCaptain(response.data.captain);
        
        // Clear form
        setEmail('');
        setUsername('');
        setPassword('');
        setPhoneno('');
        setAdharno('');
        setLocation('');

        // Navigate
        navigate('/GuiderDashboard');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg">
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        <h2 className="text-2xl font-bold text-center mb-6"> Register </h2>
        <p className="text-gray-600 text-center mb-4">Create account as an Guider </p>
        <form onSubmit={handleSubmit}>
          <Input
            label="Username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder=''
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="phone no"
            type="number"
            placeholder="Enter your phone no"
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
          />
          <Input
            label="adhar no"
            type="text"
            placeholder="Enter your adhar no"
            value={adharno}
            onChange={(e) => setAdharno(e.target.value)}
          />
          <Input
            label="location"
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <Button onClick={handleSubmit} type="submit" className="w-full"> Signup </Button>
           <p className="text-center text-gray-500 mt-4">Already have an account? <NavLink to="/Captain/Login" className="text-blue-500">Login</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default CaptainSignUp;

