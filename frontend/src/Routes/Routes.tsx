

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";


import Home from "../pages/Home";

import Cadastro from "../pages/Cadastro"
import Hearder from "../components/Header/Hearder";

import LerCard from "../components/Card/LerCard";




const AppRoutes = () => {
 
  return (
    <>

  
    <Router>
      
    <Hearder/>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route  path="/:id" element={<LerCard />} />
        <Route  path="/cadastro" element={<Cadastro />} />
 <Route  path="/edit/:id" element={<Cadastro />} /> 
     

   
   
  
    </Routes>

  </Router>
  </>
  );
};
export default AppRoutes;
