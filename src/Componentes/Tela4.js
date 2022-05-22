import "./Tela4.css"
import { Link } from "react-router-dom"

export default function Tela4(){
    return(
        <>
        <div className="conteudo">
            <div className="pergunta">
                        <h1>Pedido feito<br></br>
                             com sucesso!</h1>
            </div> 
            <div className="informacao-geral">
                <div className="informacao">
                    <h1>Filme e sessão</h1>
                    <h2>Enola Holmes <br></br>24/06/2021 15:00</h2>
                </div>
                <div className="informacao">
                <h1>Ingressos</h1>
                    <h2>Assento 15 <br></br>Assento 16</h2>
                </div>
                <div className="informacao">
                <h1>Comprador</h1>
                    <h2>Nome: name <br></br>CPF: cpf</h2>
                </div>
            </div>
            <div className="botao">
                <Link to="/">
                  <button class="voltar"> Voltar pra home</button>
                  </Link>
            </div>
        </div>
         </>
    )
}