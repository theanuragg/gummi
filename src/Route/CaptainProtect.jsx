import React, { useContext, useEffect, useState } from 'react'
import { useCaptain } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../components/ui/Loading'

const CaptainProtectWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useCaptain()
    const [ isLoading, setIsLoading ] = useState(true)


    useEffect(() => {
        if (!token) {
            navigate('/Captain/Login')
        }
    }, [ token ])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if (response.status === 200) {
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
    })
        .catch(err => {
            console.log(err)
            localStorage.removeItem('token')
            navigate('/Captain/Login')
        })

    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }



    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper