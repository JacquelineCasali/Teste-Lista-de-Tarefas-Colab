

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";


import Home from "../pages/Home";
// import Tarefa from "../pages/Tarefa";
// import Editar from "../pages/Editar";
import Cadastro from "../pages/Cadastro"
import Hearder from "../components/Header/Hearder";




const AppRoutes = () => {
 
  return (
    <>

  
    <Router>
    <Hearder/>

    <Routes>
      <Route path="/" element={<Home />}/>
      {/* <Route  path="/:id" element={<Tarefa />} /> */}
        <Route  path="/cadastro" element={<Cadastro />} />
 {/* <Route  path="/edit/:id" element={<Editar />} />  */}
     

   
   
  
    </Routes>

  </Router>
  </>
  );
};
export default AppRoutes;
