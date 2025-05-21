import "../globals.css";
import React from "react";
import CadastroUsuarios from "../Components/crud/CadastroUsuarios";

export default function Cadastro(){
    return (
     <div className="conteinerPage">
       <span>Cadastro Usuario</span>
       <CadastroUsuarios/>
     </div>
    );
}