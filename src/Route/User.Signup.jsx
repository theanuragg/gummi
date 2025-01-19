// src/pages/SignUp.jsx
import React, { useState, useContext } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {UserDataContext} from '../context/UserContext'

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const [ user, setUser ] = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData ={
      username: username,
      email: email,
      password: password
    }

    const response =  await axios.post( `${import.meta.env.VITE_BASE_URL_API}/users/register`, userData);

    if (response.status === 201) {

      const data = response.data;

      localStorage.setItem('token', data.token);
      setUser(data.user);
      navigate("/Rides");
    }

    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <p className="text-gray-600 text-center mb-4">Create your account by filling the form below</p>
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
          <Button onClick={handleSubmit} type="submit" className="w-full">Sign Up</Button>
          <p className="text-center text-gray-500 mt-4">Already have an account? <NavLink to="/User/Login" className="text-blue-500">Login</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

