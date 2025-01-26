import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Route/User.login";
import SignUp from "./Route/User.Signup";
import CaptionSignUp from "./Route/Captain.signup";
import CaptainLogin from './Route/Captain.login'
import Ride from "./Route/Ride";
import Home from "./Route/Home";
import { UserDataContext } from "./context/UserContext";
import RouteProtector from "./Route/Route.Protector";
import CaptainProctector from "./Route/CaptainProtect";
import GuiderDashboard from "./Route/Captaindashboard";

function App() {

  const ans = useContext(UserDataContext);


  return (
   
      <Router>
        <Routes>
            <Route path="/Captain/login" element={<CaptainLogin />} />
            <Route path="/" element={<Home/>} />
            <Route path="/GuiderDashboard" element={<GuiderDashboard/>}/>
            <Route path="/User/login" element={<Login />} />
            <Route path='/User/Signup'  element={<SignUp/>} />
            <Route path="/Captain/Signup" element={<CaptionSignUp />} />
            <Route path ="/Tour" element={
            <RouteProtector>
            <CaptainProctector>
              <Ride/>
            </CaptainProctector>
            </RouteProtector>
              } />
        </Routes>
      </Router>
   
  )
}

export default App
