
import React, {  useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

import { IoClose } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";

import api from "../../api/api";
import "./Card.css"

import inconeDesfavorito from "../../assets/Vector.png";

export default function LerCard() {
  const { id } = useParams();
  const [tarefa, setTarefa] = useState([]);

  useEffect(() => {
    
    // api.get()
    api.get("/"+id)
      .then((res) => {
        console.log(res);
        setTarefa(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);




//  busca 
  return (
    <>
   
      
    <div className="titulos" >

<h1 >Detalhe Tarefa</h1> 

  <div className="lista-favorito">
  
                <div className="favorito-tarefa" style={{height:"220px"}}>
                <div className='superior'>
                 <h5> {tarefa.titulo}</h5>
                {/* favorito */}
                                  <figure className={"icone"} style={{ cursor: "pointer" }}>
                                    <img
                                      src={inconeDesfavorito}
                                      alt="Icone"
                                      onClick={()=>addFavoritos({id})}
                                    />
                                    {/* <img src={inconeDesfavorito} alt="" /> */}
                                  </figure>
                


           
                </div>
                
                <p className='nota'style={{height:"120px"}} > {tarefa.descricao}</p>
                
               <div className='inferior'>     
               <Link to={`/edit/${tarefa.id}`}>
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
 
    </>


   

    
     

  );
}