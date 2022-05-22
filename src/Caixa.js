import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom';


export default function Caixa ({ idFilme, title, url, overview, releaseDate, index } ) {







return (
<>
    <Link to={`/sessoes/${idFilme}`}>
    <Conteudo
     key={index} 
    idFilme={idFilme}
    title={title}
    overview={overview}
    releaseDate={releaseDate}
   
    
    >


        <Poster src={url}></Poster>
            
    </Conteudo>
    </Link>
</>
    



)



}



const Conteudo = styled.li `
display:flex;
justify-content: center;
align-items: center;
width: 145px;
height: 209px;
box-sizing: border-box;
padding:8px;
box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.1);
border-radius: 3px;
margin: 18px;
`

const Poster = styled.img`
width: 129px;
height: 193px;
`