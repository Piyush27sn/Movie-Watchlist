import React from 'react';
import banner from "../assets/home-banner.jpg";
import './home.css';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Logout } from './logout';

export const Home = () => {
  return (
    <>
    <div className='homeBanner'>
      <h1> Welcome to <span className='span'> MovieMosaic! </span> </h1>
      <h6> Create a movie playlist, add your own movies, add notes, movie planned or watched? Do it with MovieMosaic! </h6>
      <h3> Let's get you started <ExpandCircleDownIcon sx={{ fontSize: "2rem", color: "var(--color-primary-end)" }} className='homeArrowIcon' /> </h3>
    </div>

    <div>
      <h3> Manage your movie watchlist </h3>
      <Logout />
    </div>
    </>
  )
}
