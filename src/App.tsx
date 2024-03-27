import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from 'react-router';

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import SignUpForm from "./components/SignUp";
import Login from "./components/Login";
// import Carousel from "./components/carousel";
import Home from "./components/Home";
import WithNavbar from "./components/WithNavbar";
import WithoutNavbar from "./components/WithoutNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route element={<WithoutNavbar />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<WithoutNavbar />}>
            <Route path="/signup" element={<SignUpForm />} />
          </Route>

          <Route element={<WithNavbar />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
