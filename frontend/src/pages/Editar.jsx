import React, { useEffect, useState } from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hearder from "../components/Hearder"
import {FiStar } from "react-icons/fi"
import { IoMdColorFill } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RiSave3Fill } from "react-icons/ri";


function Editar() {
  const { id } = useParams();
  useEffect(() => {
    // puxando dados do banco
    //  banco de dados
    axios
      .get("https://lista-tarefa.onrender.com/" + id)
      .then((res) => {
        console.log(res);

        setValues(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState({
    titulo: "",
    descricao: "",
  });
  //  editar
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("https://lista-tarefa.onrender.com/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div >
             <Hearder />
      <HelmetProvider>
        <Helmet title="Editar Tarefa" />
      </HelmetProvider>
   <h1>Editar Tarefa</h1> 

       <div className="lista-favorito">
     <div className="favorito-tarefa" >

        <form onSubmit={handleUpdate}>
        
        <div className='superior'>
        <label htmlFor="">Titulo:</label>

            <input
               className="input-padrao"
              type="text"
              placeholder="Digite o nome"
              //   monstrando na tela
              value={values.titulo}
              onChange={(e) => setValues({ ...values, titulo: e.target.value })}
            />
              <a href="#favoritos" >
                <FiStar style={{height:'18px', width:"20px", color:"#455A64"}}/>
                </a> 
          </div>
          

            <textarea
              className="textarea"
              type="text"
              placeholder="Digite o Email"
              value={values.descricao}
              onChange={(e) => setValues({ ...values, descricao: e.target.value })}
            />
     
     <div className='inferior'>  
     <Link className='icone-x' to={'#favoritos'} >
                <IoMdColorFill 
                    size={30}
                    //  cursor="pointer"
                     color="#51646E"
                     
                style={{marginRight:"220px" }}/>
                </Link> 
              
              
                <Link  to={'/'} >   
                
                <IoClose 
                 size={30}
                //  cursor="pointer"
                 color="#51646E"
               />
                </Link> 
     <button className="button"><RiSave3Fill
      className="icone-salvar"
      size={35}
      cursor="pointer"
      color="blue"
     /></button>

     </div>
     
     
     
        </form>
      </div>
      </div>
    </div>
  );
}
export default Editar;
