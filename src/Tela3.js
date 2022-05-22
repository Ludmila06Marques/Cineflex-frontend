import styled from "styled-components"
import axios from "axios";
import { useParams , Link } from 'react-router-dom';
import {useState, useEffect } from 'react';
import Instrucao from "./Instrucao"

export default function Tela3 (){
    const[name , setName]=useState(" ")
    const[cpf , setCpf]=useState(" ")
    const { idSessao } = useParams()

    const [lugar, setLugar] = useState([])



    useEffect (() => {
        const promise = axios.get (`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then (request =>{
            setLugar(request.data.seats)
            
            
        })    
    },[] ) 


    return (
        <>
        <Selecionar> Selecione o(s) assento(s) </Selecionar>
        <Lugares>
            {lugar.map ((props,index) =>
            <PrintarLugar 
            key={index}   
            index={index}
            >
               
            {props.name}
                 
            </PrintarLugar>
            
            )}



        </Lugares>
        <Instrucao/>
        <Dados>
                <Dado>
                    <h1>Nome do comprador:</h1>
                    <form > 
                  <input type="text" placeholder="Digite seu nome" onChange={(e)=> setName(e.target.value)} value={name} required />
                  </form>
                </Dado>
                <Dado>
                    <h1>CPF do comprador:</h1>
                    <form >
                    <input type="text" placeholder="Digite seu CPF"  onChange={(e)=> setCpf(e.target.value)} value={cpf}  required/>
                    </form>
                </Dado>
            </Dados>
            {/*BOTAO PARA RESERVAR E FAZER O POST NA API */}
            <Bot>
                <Link to="/sucesso">
                  <Button > Reservar assento/s</Button>
                  </Link>
            </Bot>
        </>



    )

}
const Bot= styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:40px
  
    `


const Dado= styled.div`
  h1{font-size: 18px;
    color: #293845;

}
    input{
        width: 327px;
        height: 51px;
        margin-bottom:33px;
    }
    `

const Dados= styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 21px;`
    

const Selecionar = styled.h1 `
width: 100%;
height:110px;
display:flex;
align-items:center;
justify-content: center;
font-size: 24px;
`
const Button = styled.button`
width:225px;
height: 42px;
background-color: #E8833A;
font-size: 18px;
color: #FFFFFF;
`


const Lugares = styled.div`
display:flex;
flex-wrap: wrap;
width: 100%;
padding: 10px;
`

const PrintarLugar = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin: 4px;
margin-bottom: 18px;
width:26px;
height:26px;
border-radius: 50px;
border: #808F9D solid 1px;
color: #000000;
background: #C3CFD9;
`