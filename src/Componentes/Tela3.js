import "./Tela3.css"
import Assento from "./Assento"
import { Link } from "react-router-dom"

export default function Tela3(){
   
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
                   <div className="input">Digite seu nome...</div>
                </div>
                <div className="dado-cpf">
                    <h1>CPF do comprador:</h1>
                   <div className="input">Digite seu CPF...</div>
                </div>
            </div>
            <div className="botao">
                <Link to="/sucesso">
                  <button class="reservar"> Reservar assento/s</button>
                  </Link>
            </div>
            <div className="footer">
                <div className="filme-escolhido"></div>
                <div className="titulo"><h1>Enola Holmes</h1></div>
             </div>
          
        </div>
        </>
    )
}