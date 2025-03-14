
import React, {  useEffect, useState } from "react";

import "../components/Card/Card.css"
import { IoMdColorFill } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RiSave3Fill } from "react-icons/ri";
import {FiStar } from "react-icons/fi"

import { Link,useNavigate, useParams } from "react-router-dom";

import api from "../api/api";
import { Head } from "../components/Head/Head";

export default function Cadastrar() {
  const elementId = "color-box"; // ID do elemento que terá a cor alterada
  
  const {id}=useParams();
  const [color, setColor] = useState(); // Cor inicial branca
  const [showPicker, setShowPicker] = useState(false); // Controla a visibilidade do input
    const navigate = useNavigate();

    useEffect(() => {
      // puxando dados do banco
      //  banco de dados
      api
        .get("/" + id)
        .then((res) => {
          console.log(res);
  
          setValues(res.data[0]);
        })
        
    }, []);

    const [values, setValues] = useState({
      titulo: "",
      descricao: "",
    }); 
 async function SaveTarefa() {
     try {
    const response=  id > 0 ? await api.put(`/`+id, values):
    await api.post("/" ,values)
    if(response.data){
      navigate("/")
    }
  
  } catch (error) {
    alert(error.response?.data.error);
  }

     
  }
 
  
  //  busca 
  return (

    
    <div className="titulos"  >
 
      <Head title={id > 0 ?"Editar tarefa":"Cadastrar Tarefa"}/> 
 
 
    <h1>{id > 0 ?"Editar tarefa":"Cadastrar Tarefa"}</h1> 


  
  
  <div className="lista-favorito">
                <div className="favorito-tarefa" 
                 id={elementId}
                 style={{background:color}}
                >
                   
                <form className="login-fomr">
                <div className='superior'
                 id={elementId}
                 style={{background:color}}>
                <label htmlFor="">Titulo:</label>
                <input
            className="input-padrao"
            type="text"
            value={values.titulo}
            onChange={(e) => setValues({ ...values, titulo: e.target.value })}
            placeholder="Digite um titulo"
            required
            id={elementId}
            style={{background:color}}
          />
                <a href="#favoritos" >
                <FiStar style={{height:'18px', width:"20px", color:"#455A64"}}/>
                </a> 
       </div>
       {/* <div className="nota"> */}

                <textarea
            className="textarea"
            type="text"
            value={values.descricao}
            onChange={(e) => setValues({ ...values, descricao: e.target.value })}
            placeholder="Digite uma Tarefa"
            required
            id={elementId}
            style={{background:color}}
      />
                  
               <div className='inferior'>     
                     {showPicker && (
                       <input
                         type="color"
                         value={color}
                         onChange={(e) => setColor(e.target.value)}
                         style={{
                           width: "150px",
                           height: "40px",
                           border: "none",
                           cursor: "pointer",
                         }}
                       />
                     )}
             
                     <IoMdColorFill
                       onClick={() => setShowPicker(!showPicker)}
                       style={{
                         marginRight: "150px",
             
                         color: "black",
                         fontSize: 20,
                       }}
                     >
                       {showPicker ? "Fechar" : "Escolher Cor"}
                     </IoMdColorFill>
              
              
                <Link className='icone-x' to={'/'} >   
                
                <IoClose style={{height:'30px', width:"30px", color:"#51646E"}}/>
                </Link> 
               
                <button className="button" type="button"
  onClick={SaveTarefa}
  ><RiSave3Fill style={{height:'35px', width:"35px", color:"blue"}}/></button>

               
              
                </div>
                </form>    
               </div>
            
    </div>



     
    </div> 
 

  );
}