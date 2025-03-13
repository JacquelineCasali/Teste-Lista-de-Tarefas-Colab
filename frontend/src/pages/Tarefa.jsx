import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import "../styles/Favoritos.css"
// import { IoMdColorFill } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import {FiStar } from "react-icons/fi"
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hearder from "../components/Hearder"

export default function Tarefa() {
  const { id } = useParams();
  const [services, setServices] = useState([]);


  useEffect(() => {
    // axios.get('http://127.0.0.1:5430')
    axios.get("http://127.0.0.1:5430/"+id)
      .then((res) => {
        console.log(res);
        setServices(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
//  busca 
  return (
    <div >
    <Hearder />
<HelmetProvider>
<Helmet title="Editar Tarefa" />
</HelmetProvider>
<h1 >Detalhe Tarefa</h1> 
 
  <div className="lista-favorito">
  
                <div className="favorito-tarefa" style={{height:"220px"}}>
                <div className='superior'>
                 <h5> {services.titulo}</h5>
                <a href="/" >
                <FiStar style={{height:'18px', width:"20px", color:"#455A64"}}/>
                </a> 

           
                </div>
                
                <p className='nota'style={{height:"120px"}} > {services.descricao}</p>
                
               <div className='inferior'>     
               <Link to={`/edit/${services.id}`}>
                <FaPencil style={{height:'22px', width:"22px", color:"#51646E"}}/>
                </Link> 
                {/* <Link className='icone-x' to={'#favoritos'} >
                <IoMdColorFill style={{height:'18px', width:"18px", marginRight:"250px", color:"#51646E"}}/>
                </Link>  */}
                <Link className='icone-x' to={'/'} >   
                
                <IoClose style={{height:'20px', width:"20px", color:"#51646E"}}/>
                </Link> 
                </div>
               
               </div>
  
    </div>



     
    </div> 
 



   

    
     

  );
}