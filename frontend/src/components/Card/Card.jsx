
import React, { useEffect, useState } from "react";

import "./Card.css"
import { IoMdColorFill } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaPencil,FaBook } from "react-icons/fa6";
import {FiStar } from "react-icons/fi"

import { Link } from "react-router-dom";
import api from "../../api/api";
import Title from "../Title/Tlite";
export default function Card() {

  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      api.get(`/`
      ).then((response)=>{
        setData(response.data);
       
       console.log(response.data);
       setMessage(response.data.message);
})} catch (err) {         
  console.error(err);   
  if (err.response) {
        setMessage(err.response.data.message);
      } 
    }; }, []);

//  busca 
  return (
    <div  id="outras" >
 <Title >Outras</Title>
  <div className="lista-favorito">
{
            data.map((tarefa)=>{
              return(
                <div className="favorito-tarefa" key={tarefa.id}>
                <div className='superior'>
                 {/* <h5> Titulo</h5> */}
                 <h5 > {tarefa.titulo}</h5>
                <a href="#favoritos" >
                <FiStar style={{height:'18px', width:"20px", color:"#455A64"}}/>
                </a> 
                </div>
                
                <p className='nota'> {tarefa.descricao}</p>
                
               <div className='inferior'>     
               <Link to={`/${tarefa.id}`}>
                        <FaBook
                          color="black"
                          size={17}
                          cursor="pointer"
                          className="icone"
                        />
                      </Link>
              
                      <Link to={`/edit/${tarefa.id}`}>
                <FaPencil style={{height:'17px', width:"17px", color:"#51646E"}}/>
                </Link> 
                <Link className='icone-x' to={'#favoritos'} >
                <IoMdColorFill style={{height:'18px', width:"18px", marginRight:"250px", color:"#51646E"}}/>
                </Link> 
                
                <Link onClick={() => deletetarefa(tarefa)}>
                <IoClose style={{height:'16px', width:"16px", color:"#51646E"}}/>
                </Link> 
               
               
                </div>
               
               </div>
              )})
    }
  
    </div>



     
    </div> 
 

  );
}