import React from "react";
import { NavLink, Link} from "react-router-dom";
import Button from "../components/ui/Button";
import Glode from '../assets/Globe.png';
import User from '../assets/User.png';

const Home = () => {
  return (
    <div className="min-h-screen text-gray-800 bg-white flex flex-col justify-center items-center">
      <div className="absolute top-2 left-5 text-2xl font-bold">
        <span className="text-gray-950">G</span>umii
      </div>

      <div className="flex flex-col items-center">
        <div className="">
          <div className="grid md:grid-cols-2 gap-36">

            <div>
              <h2 className="text-xl top-6">I want to be</h2>
              <h3 className="text-2xl font-bold mb-4">Guider</h3>
              <NavLink to= '/Captain/signup'>
              <Button
                className="w-full flex items-center justify-between gap-40"
              >
                I Drive
                <span>{'>'}</span>
              </Button>
              </NavLink>
            </div>
            <div className="p-1 flex justify-center items-center">
              <img src={Glode} alt="Glode" className="w-40 h-40   rounded-md" />
            </div>
            <div className="p-1 flex justify-center items-center">
              <img src={User} alt="User" className="w-40 h-40  rounded-md" />
            </div>
            {/* Text and Button */}
            <div>
              <h2 className="text-xl">I am</h2>
              <h3 className="text-2xl font-bold mb-4">User</h3>
            <NavLink to= '/User/signup'>
              <Button   className="w-full flex items-center justify-between gap-40">
                I Ride
               
                <span>{'>'}</span>
               
              </Button>
            </NavLink>
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Home;
