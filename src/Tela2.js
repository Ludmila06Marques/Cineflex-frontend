import styled from "styled-components"
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hora from "./Hora";
import Footer from "./Footer";



export default function Tela2 ({poster , setPoster , horario , setHorario}){
   
    const { idFilme } = useParams()
  
   

    useEffect (() => {
        const promise = axios.get (`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        promise.then (response =>{
            setHorario(response.data.days)
            console.log(response.data.days)
            setPoster(response.data)
            
            
        })    
    },[] )

        function Selecionar(){
            
        }

    

    return (
            <>
            <Titulo> Selecione o horário</Titulo>

            {horario.map((props,index)=> 

                <Sessao onClick={Selecionar}
                key={index}
                scheduleId={props.id}
                weekday={props.weekday}
                date={props.date}
                
                ><Dia>{props.weekday} - {props.date} </Dia>

                    
                    <Hora
                    showtimes={props.showtimes}
                   
                    > 
                    </Hora>
                    
                    
                    
                    

                </Sessao>)}
            
            <Footer>
                <BannerFilme src={poster.posterURL}></BannerFilme>
                <BannerName> {poster.title} </BannerName>
            </Footer>
            </>


    )

}
const Dia = styled.h1`
font-size:20px;
font-weight: lighter;
`

const Titulo =styled.h1`
width: 100%;
height:110px;
display:flex;
align-items:center;
justify-content: center;
font-size: 24px;
`

const Sessao = styled.div`
margin-left: 20px;


`


const BannerFilme = styled.img `
background-color: #FFFFFF;
margin-left: 10px;
width:64px;
height:89px;
`

const BannerName = styled.h1`
font-size:26px;
font-weight: lighter;
margin-left: 14px;


`