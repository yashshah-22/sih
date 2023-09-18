import React from "react";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import AppointmentForm from "./AppointmentForm";
import Home from "./Home";
import Other from './Other';
import './Other.css';
import Navbar from "./Navbar";
import Eaushadi from "./Eaushadi";
import Maps from "./maps";
import ProductComparison from "./ProductComparison";
const App = () => {
  return (
    <>
    <Navbar/>
   <Routes>
   <Route path="/" element={<><Home/><Other/></>}/>
    <Route path="/appointment" element={<><AppointmentForm/></>}/>
    <Route path="/eaushadi" element={<><Eaushadi/></>}/>
    <Route path="/maps" element={<><Maps/></>}/>
    <Route path="/buyonline" element={<><ProductComparison/></>}/>

   </Routes>
    </>
  );
};

export default App;