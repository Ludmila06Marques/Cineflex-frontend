import "./Tela3.css"

import { Link, useParams } from "react-router-dom"
import { useEffect} from "react"
import axios from "axios"
import React from "react"
import Footer from "./Footer"
import "./Assento.css"


function Assento(){
    return(<>
     <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
      <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
        <div className="assento">               
        </div>
       
       
    </>
       
    )
}






export default function Tela3(){

 const [filme , setFilme]= React.useState({})
const {idSessao}= useParams()
const[name , setName]=React.useState(" ")
const[cpf , setCpf]=React.useState(" ")
const [sessao , setSessao]= React.useState({})
 
//Pegar os assentos disponiveis de cada sessao
useEffect(()=>{
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
    promise.then(response=>{
    setSessao({...response.data})
    setFilme({...response.data})
 
   
    })
},[])




function Prevenir (e){
    e.preventDefault()
}
    return(
        <>
        <div className="conteudo">
            <div className="pergunta">
                    <h1>Selecione o/s assento/s</h1>
            </div>
            <div className="assentos">
                <Assento/>
            </div>
            <div className="status">
                <div className="conjunto">
                    <div className="bola blue"></div>
                    <div className="texto"><h1>Selecionado</h1></div>
                    </div>
                <div className="conjunto">
                <div className="bola cinza"></div>
                    <div className="texto"><h1>Disponível</h1></div>
                </div>
                <div className="conjunto">
                <div className="bola laranja"></div>
                    <div className="texto"><h1>Indisponível</h1></div>
                </div>
            </div>
            <div className="dados">
                <div className="dado-nome">
                    <h1>Nome do comprador:</h1>
                    <form  onSubmit={Prevenir}> 
                  <input type="text" placeholder="Digite seu nome" onChange={(e)=> setName(e.target.value)} value={name} required />
                  </form>
                </div>
                <div className="dado-cpf">
                    <h1>CPF do comprador:</h1>
                    <form onSubmit={Prevenir} >
                    <input type="text" placeholder="Digite seu CPF"  onChange={(e)=> setCpf(e.target.value)} value={cpf}  required/>
                    </form>
                </div>
            </div>
            <div className="botao">
                <Link class="reservar"to="/sucesso">
                  <button > Reservar assento/s</button>
                  </Link>
            </div>
        <Footer filme={filme}/>
          
        </div>
        </>
    )
  
}