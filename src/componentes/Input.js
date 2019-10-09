import React from 'react';
import './Input.scss';


const Input = ({label,placeholder,type,atualizarState,obrigatorio}) => {
    const atualizar = (event) => {
        atualizarState(event.target.value)
    }
    return (
     <div className="Input">
         <label>{label}{obrigatorio ? "*" : ""}</label>
         <input required={obrigatorio ? true : false}  type={type} placeholder={placeholder}  onChange={atualizar} />
     </div>
    )
  }
  export default Input;