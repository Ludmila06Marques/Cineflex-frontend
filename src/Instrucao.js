
import styled from "styled-components"
export default function Instrucao(){
    return(
        <>
<Conjuntao>
            <Conjunto>
                    <BolaAzul></BolaAzul>
                    <Texto>Selecionado</Texto>
            </Conjunto>
                <Conjunto>
                <BolaCinza></BolaCinza>
                    <Texto>Disponível</Texto>
                </Conjunto>
                <Conjunto>
                <BolaLaranja></BolaLaranja>
                    <Texto>Indisponível</Texto>
             </Conjunto>
             </Conjuntao></>
    )
}
const Conjuntao= styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Conjunto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`
const BolaAzul= styled.div`
   height: 26px;
    width: 26px;
    border-radius: 50px;
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
`
const BolaCinza= styled.div`
 height: 26px;
    width: 26px;
    border-radius: 50px;
    background-color: 
    #C3CFD9;
    border: 1px solid 
    #7B8B99;
`
const BolaLaranja=styled.div`
 height: 26px;
    width: 26px;
    border-radius: 50px;
    background-color: 
   #FBE192;
    border: 1px solid 
    #F7C52B;
`
const Texto= styled.h1`
  font-size: 15px;
    color: #4E5A65;
    margin-top: 5px;
`