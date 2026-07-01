import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import { Link, Routes, Route } from "react-router-dom";
import Home from './home.jsx'
import About from './about.jsx'
import Service from './service.jsx'

import './App.css'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">About</Link> | {" "}
        <Link to="/service">Service</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>


    </>
  );
}

export default App
