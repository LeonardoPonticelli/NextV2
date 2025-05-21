'use client';
import React, { useState } from 'react';
import todosOsUsuarios from "../../data/constants/usuarios";
import Usuario from "../../data/model/Usuario";
import ListaUsuarios from "./ListaUsuario";

export default function CadastroUsuario(){
    const [usuarios,setUsuarios] = useState<Usuario[]>(todosOsUsuarios);

    function removerUsuario(usuario: Usuario){
        const todosMenosUsuarioInformado = usuarios.filter(
            (u) => u.id !== usuario.id
        );
        setUsuarios(todosMenosUsuarioInformado);
    }

    return(
        <span>
            <ListaUsuarios usuarios = {usuarios} removerUsuario={removerUsuario}/>
        </span>
    )
}