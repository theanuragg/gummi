// src/pages/Login.jsx
import React, { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";


const Login =   () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(['']);
  const [password, setPassword] = useState(['']);
  const [userData, setUserData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData ={
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL_API}/users/login`, userData);


    if (response.status === 200) {
      const data = response.data;
      setUserData(data.user);
      localStorage.setItem('token', data.token);
      navigate("/Tour");
    }

    setEmail('');
    setPassword('');
  }; 

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg ">
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
          <p className="text-center text-gray-500 mt-4">Don't have an account? <NavLink to="/User/Signup" className="text-blue-500">Sign Up</NavLink></p>
        </form>

      </div>
    </div>
  );
};

export default Login;
