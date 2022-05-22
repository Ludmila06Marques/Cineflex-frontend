import "./Tela1.css"
import React from 'react'
import { useEffect } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

// 1 FILME
function Filme({src , id} ){

    return(
<>
        
         <Link to={`/sessoes/${id}`}>
        <div className="filme"> <img src={src} /></div> 
        </Link>
        </>
    )
}

//Funcao que vai inserir o filme
export default function Tela1(){

    //Variavel que recebe o filme
    const [filme , setFilme]=React.useState([])

    //Pegar a lista de filmes da API
    useEffect(()=>{
    const promiseFilme= axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    promiseFilme.then((response)=>{
    setFilme([...response.data])   
             
    })
   },[])
   


    return(
        <>
       
        <div className="conteudo">
            <div className="pergunta">
                <h1>Selecione o filme</h1>
            </div>
            <div className="filmes">

         {
               filme.map((item , index)=> <Filme key={index} index={index}  src={item.posterURL} id={item.id} />)
           }     
            </div>
        </div>
        </>
    )
}