import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppNavbar } from "./components/navbar";

import { Home } from "./pages/home";
import { Movies } from "./pages/movies";
import { Watchlist } from "./pages/watchlist";

import './App.css';
import { Login } from "./pages/login";
import { Register } from "./pages/register";

function App() {
  return (
    <>
      <Router>
        < AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
