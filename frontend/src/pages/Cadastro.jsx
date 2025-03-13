
import React, {  useState } from "react";

import "../components/Card/Card.css"
import { IoMdColorFill } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RiSave3Fill } from "react-icons/ri";
import {FiStar } from "react-icons/fi"

import { Link,useNavigate } from "react-router-dom";

import api from "../api/api";
export default function Cadastrar() {
  const [values, setValues] = useState({
    titulo: "",
    descricao: "",
  }); 
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    api.post(`/`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
 
  
  //  busca 
  return (
    <div   >
    <h1>Cadastrar Tarefa</h1> 
  <div className="lista-favorito">
                <div className="favorito-tarefa" >
                   
                <form className="login-fomr" onSubmit={handleSubmit}>
                <div className='superior'>
                <label htmlFor="">Titulo:</label>
                <input
            className="input-padrao"
            type="text"
            onChange={(e) => {
              setValues({ ...values, titulo: e.target.value });
            }}
            placeholder="Digite um titulo"
            required
          />
                <a href="#favoritos" >
                <FiStar style={{height:'18px', width:"20px", color:"#455A64"}}/>
                </a> 
       </div>
       {/* <div className="nota"> */}

                <textarea
            className="textarea"
            type="text"
            onChange={(e) => {
              setValues({ ...values, descricao: e.target.value });
            }}
            placeholder="Digite uma Tarefa"
            required
      />
      {/* </div> */}
       
           
                {/* <p className='nota'> {services.descricao}</p> */}
                
               <div className='inferior'>     
                <Link className='icone-x' to={'#favoritos'} >
                <IoMdColorFill style={{height:'30px', width:"30px", marginRight:"220px", color:"#51646E"}}/>
                </Link> 
              
              
                <Link className='icone-x' to={'/'} >   
                
                <IoClose style={{height:'30px', width:"30px", color:"#51646E"}}/>
                </Link> 
               
                
                <button className="button"><RiSave3Fill className="icone-salvar"style={{height:'35px', width:"35px", color:"blue"}}/></button>
              
                </div>
                </form>    
               </div>
            
    </div>



     
    </div> 
 

  );
}