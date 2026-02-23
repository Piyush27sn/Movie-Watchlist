import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await axios.post("http://localhost:5001/auth/register", {
            name,
            email,
            password,
        });
        alert("Registration successful!");
        navigate("/")
        } catch (err) {
            console.error(err);
            alert("Registration failed");
        }
    };

  return (
    <div>
        <h2> Register </h2>
        <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>

    </div>
  )
}
