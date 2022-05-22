import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Tela4({cpf , name}){

    return(
        <>
   
            <Pergunta>
                        <h1>Pedido feito<br></br>
                             com sucesso!</h1>
            </Pergunta> 
            <InformacaoGeral>
                <Informacao>
                    <h1>Filme e sessão</h1>
                    <h2>Enola Holmes <br></br>24/06/2021 15:00</h2>
                </Informacao>
                <Informacao>
                <h1>Ingressos</h1>
                    <h2>Assento 15 <br></br>Assento 16</h2>
                </Informacao>
                <Informacao>
                <h1>Comprador</h1>
                    <h2>Nome: {name} <br></br>CPF: {cpf}</h2>
                </Informacao>
            </InformacaoGeral>
            <Botao>
                <Link to="/">
                  <Button class="voltar"> Voltar pra home</Button>
                  </Link>
            </Botao>
     
         </>
    )
}
const Botao= styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 130px;`
    
const Button = styled.button`
width:225px;
height: 42px;
background-color: #E8833A;
font-size: 18px;
color: #FFFFFF;
margin-top:50px`

const InformacaoGeral= styled.div``
const Informacao= styled.div`
  margin-top: 20px;
    margin-left: 28px;
    h1{
        font-size: 24px;
font-weight: bold;
color: #293845;
    }
    h2{
        margin-top: 8px;
    font-size: 22px;
    color: #293845; 
    }`
const   Pergunta= styled.div`
display: flex;
justify-content: center;
align-items: center;
   width: 100%;
    height: 110px;
    h1{
        font-size: 24px;
color: #247A6B;
font-weight: bold;
    }`