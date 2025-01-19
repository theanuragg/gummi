import React,{useContext, useEffect, useState} from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const RouteProtector = ({children}) => {
    const [user, setUser] = useContext(UserDataContext);

    const token = localStorage.getItem('token');

    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('User/Signup')
        }

        axios.get(`${import.meta.env.VITE_API_URL}/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                setUser(response.data.user);
                setIsLoading(false);
            }
        }).catch((error) => {
            console.log(error);
            localStorage.removeItem('token');
            navigate('User/Signup');
        });
    }, [ token ])

    return children;
}

export default RouteProtector;