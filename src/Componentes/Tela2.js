import "./Tela2.css"
import {Link} from "react-router-dom"
export default function Tela2(){
    return(<>
  
        <div className="conteudo">
            <div className="pergunta"><h1>Selecione o horário</h1></div>
            <div className="horarios">
                <div className="horario">
                    <div className="data"><h1>Quinta-feira - 24/06/2021</h1></div>
                    <div className="horas">
                         <Link  to="/assentos/:idSessao">
                         <div className="hora"><h1>15:00</h1></div>
                         </Link>
                        
                         <Link to="/assentos/:idSessao">
                         <div className="hora"><h1>15:00</h1></div>
                         </Link>
                    </div>
                </div>             
            </div>
        </div>
        <div className="footer">
        <div className="filme-escolhido"></div>
        <div className="titulo"><h1>Enola Holmes</h1></div>
        </div>
        </>
    )
}