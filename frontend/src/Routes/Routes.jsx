

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";




import Cadastro from "../pages/Cadastro"
import Hearder from "../components/Header/Hearder";

import LerCard from "../components/Card/LerCard";
import Favoritos from "../components/Favoritos/Favoritos";
import HomeTeste from "../pages/Home";
import CardProvider from "../context/CardContext";





const AppRoutes = () => {
 
  return (
    <>

  
    <Router>
      
    

 

    <CardProvider >
        <Hearder/>
   
<Routes>
      <Route path="/" element={<HomeTeste />}/>
      <Route  path="/:id" element={<LerCard />} />
        <Route  path="/cadastro" element={<Cadastro />} />
 <Route  path="/edit/:id" element={<Cadastro />} /> 
 <Route  path="/favoritos" element={<Favoritos />} /> 

   
   
  
    </Routes>

    </CardProvider>

  </Router>
  </>
  );
};
export default AppRoutes;
