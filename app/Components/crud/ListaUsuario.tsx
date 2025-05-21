'use client';
import "./Crud.css"
import Usuario from "@/app/data/model/Usuario";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export interface ListaUsuariosProps{
    usuarios: Usuario[];
    removerUsuario:(usuario: Usuario) => void;
}

export default function ListaUsuarios(props: ListaUsuariosProps){
    function renderizarUsuario(usuario:Usuario){
        return <div className="name">
            <div className="name-span">
                <span>{usuario.nome}</span>
                <span className="email-span">{usuario.email}</span>
            </div>
             
             <div className="alterar-delete">
                <button className="alterar"><FontAwesomeIcon className="icone" icon={faPen} /></button>
                <button className="deletar" onClick={() => props.removerUsuario(usuario)}><FontAwesomeIcon className="icone" icon={faTrashCan} /></button>
             </div>
              </div>;
    }
    return(
        <ul className="ul-name">
         {props.usuarios.map(usuario => {
            return <li key ={usuario.id}>
                {renderizarUsuario(usuario)}
            </li>
         })}
        </ul>)
}