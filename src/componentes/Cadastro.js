import React, { useState, useEffect } from 'react';
import Input from './Input';
import Botao from './Botao';

const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [aumentar, setAumentar] = useState(1);
    const [count, setCount] = useState(1);
    const [mensagem, setMensagem]= useState("");


    const resposta = texto => {
        setMensagem(texto);
        setTimeout(() => {
          setMensagem("")
        }, 1500);
      }
    const handleSubmit = e =>{
        e.preventDefault();
        if(email === confirmEmail){
            const payload = {
                name: nome,
                email: email,
                confirm_email: confirmEmail,
                password: senha
            }
        window.localStorage.setItem(`Dados${count}`,JSON.stringify(payload));
        setCount(count + 1);
    
        setNome("");
        setEmail("");
        setConfirmEmail("");
        setSenha("");
        resposta("Cadastrado com sucesso");
        }else {
            resposta("Os emails não correspondem");
         }    
    }
       
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${aumentar}`,{
            method:"GET"
        }).then((result)=>{
            return result.json();
        }).then((data)=>{
            console.log(data.name)
        }).catch(()=>{
            console.error("Errooooooou, internet ruim em ")
        })
    }, [aumentar])
    const incrementar  = () =>{
        setAumentar(aumentar + 1);
    }

    return (
     <div className="Cadastro">
       

         <h1>Cadastre-se aqui</h1>
         <p>{mensagem}</p>
         <form onSubmit={handleSubmit}>
         <Input  value={nome}
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
            atualizarState={setNome}
            obrigatorio
            />

         <Input value={email}
            type="email" 
            label="email"
            placeholder="Digite seu email"
            atualizarState={setEmail}
            obrigatorio
            />

         <Input value={confirmEmail}
             type="email"
             label="Confirma email" 
             placeholder="Confirme seu email" 
             atualizarState={setConfirmEmail}/>
         <Input value={senha}
             type="password"
             label="senha"
             placeholder="Digite sua senha"
             atualizarState={setSenha}/>
             <Botao />
         </form>
         <button onClick ={incrementar}>Adicionar</button>
     </div>
    )
  }
  export default Cadastro;