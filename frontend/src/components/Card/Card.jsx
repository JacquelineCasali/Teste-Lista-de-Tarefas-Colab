import React, { useContext, useEffect, useState } from "react";

import "./Card.css";
import { IoMdColorFill } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaPencil, FaBook } from "react-icons/fa6";

import { Link } from "react-router-dom";
import api from "../../api/api";

import Modal from "../Modal/Modal";

import { FiStar } from "react-icons/fi";

// import ColorPicker from "../Color/Color";

export default function Card({ titulo, descricao, fav, id }) {
  const elementId = "color-box"; // ID do elemento que terá a cor alterada
  const [openModal, setOpenModal] = useState(false);
  const [color, setColor] = useState(); // Cor inicial branca
  const [fontcolor, setFontColor] = useState("black"); // Cor inicial branca

  const [showPicker, setShowPicker] = useState(false); // Controla a visibilidade do input
  // Função que abre a modal
  function abrirModal() {
    setOpenModal(true);
  }

  // Função que fecha a modal
  function fecharModal() {
    setOpenModal(false);
  }

  // deletar
  async function handleDelete(data) {
    await api.delete(`/${data.id}`);
    getTodos();
    alert("Tarefa deletada com sucesso");
    fecharModal();
  }



  return (
    <>
      {/* <div className="lista-favorito"> */}

      <div className="favorito-tarefa" 
              // colors= cores
              id={elementId}
              style={{ fontcolor: color ,background:color}}
             >

      <div className="superior">
        {/* <h5> Titulo</h5> */}
        <h5> {titulo}</h5>
        <button>
          <FiStar
            style={{ color: "#455a64", fontSize: 20, cursor: "pointer" }}
          />
          {fav && (
            <FiStar
              style={{ color: "#ffa000", fontSize: 20, cursor: "pointer" }}
            />
          )}
          {/* favorito */}
          {/* <figure className={"icone"} style={{ cursor: "pointer" }}>
                    <img
                      src={inconeDesfavorito}
                      alt="Icone"
                  
                    />
                 
                  </figure> */}
        </button>
      </div>

      <p className="nota"> {descricao}</p>

      <div className="inferior">
        <Link to={`/${id}`}>
          <FaBook color="black" size={17} cursor="pointer" className="icone" />
        </Link>

        <Link to={`/edit/${id}`}>
          <FaPencil
            style={{
              fontSize: 20,
              color: fontcolor,
            }}
          />
        </Link>

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

            color: fontcolor,
            fontSize: 20,
          }}
        >
          {showPicker ? "Fechar" : "Escolher Cor"}
        </IoMdColorFill>
              <IoClose
          style={{ fontSize: 25, color: fontcolor, cursor: "pointer" }}
          onClick={abrirModal}
        />
        <Modal isOpen={openModal} isClose={fecharModal}>
          <h2>Olá</h2>
          <span className="span">
            Tem certeza que deseja deletar essa Tarefa?
          </span>
          <div>
            <button onClick={fecharModal} className="btn">
              Cancelar
            </button>
            <button onClick={() => handleDelete(tarefa)} className="btn-del">
              Deletar
            </button>
          </div>
        </Modal>
      </div>
      </div>

      {/* </div> */}
    </>
  );
}
