// src/pages/Login.jsx
import React, { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { NavLink } from "react-router-dom"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCaptain } from '../context/CaptainContext';

const CaptainLogin = () => {
  const { setCaptain } = useCaptain();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL_API}/Captains/login`,
        { email, password }
      );

      if (response.status === 200) { // Changed from '200' to 200
        const { captain, token } = response.data;
        
        // Store token consistently
        localStorage.setItem('captain-token', token);
        
        // Update captain context
        setCaptain(captain);
        
        // Clear form
        setEmail('');
        setPassword('');
        
        // Navigate after successful login
        navigate('/GuiderDashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.response?.data?.message || 'Login failed. Please check your credentials.');
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
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <p className="text-gray-600 text-center mb-4">Enter your email and password to login to your account</p>
        <form onSubmit={handleSubmit}>
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
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit} type="submit" className="w-full">Login</Button>
          <p className="text-center text-gray-500 mt-4">Don't have an account? <NavLink to="/Captain/signup" className="text-blue-500">Sign Up</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default CaptainLogin;
