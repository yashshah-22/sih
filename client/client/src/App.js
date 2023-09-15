import React from "react";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import AppointmentForm from "./AppointmentForm";
import Home from "./Home";
import Other from './Other';
import './Other.css';
import Navbar from "./Navbar";
const App = () => {
  return (
    <>
    <Navbar/>
   <Routes>
   <Route path="/" element={<><Home/><Other/></>}/>
    <Route path="/appointment" element={<><AppointmentForm/></>}/>
   </Routes>
    </>
  );
};

export default App;