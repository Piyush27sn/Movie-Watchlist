import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

export const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:5001/auth/logout");
            alert("Logged out successfully!");
            navigate("/");
        } catch (err) {
            console.error(err)
            alert("Logout failed");
        }
    }
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
