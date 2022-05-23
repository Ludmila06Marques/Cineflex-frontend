
import styled from "styled-components"
import axios from "axios"
import Caixa from "./Caixa"
import { useState, useEffect } from "react"


export default function Tela1 ({filme , setFilme}) {



useEffect (() => {
const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

promise.then(response => {
    setFilme([...response.data])
    
})

},[]);





    
    return (
        <>
        <Conteudo>
            <Titulo> Selecione o Filme</Titulo>
            <Filmes>
                {filme.map((umFilme,index) => 
                
                <Caixa 
                key={index}
                idFilme={umFilme.id}
                title={umFilme.title}
                url={umFilme.posterURL}
                overview={umFilme.overview}
                releaseDate={umFilme.releaseDate} >
                </Caixa>
                    ) }
                    
            </Filmes>

        </Conteudo>
        

        </>


    )
}

const Conteudo = styled.div `
width:100%;
height:100%;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
box-sizing: border-box;
`

const Titulo = styled.h1 `
width: 100%;
height:110px;
display:flex;
align-items:center;
justify-content: center;
font-size: 24px;
`
const Filmes = styled.ul `
display:flex;
align-items: center;
justify-content: center;
flex-wrap:wrap;
`