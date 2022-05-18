import "./Tela1.css"
import {Link} from "react-router-dom"

export default function Tela1(){
    return(
        <>
       
        <div className="conteudo">
            <div className="pergunta">
                <h1>Selecione o filme</h1>
            </div>
          
            <div className="filmes">
            <Link to="/sessoes/:idFilme">
                <div className="filme"></div> 
                </Link>
            </div>
          
           
        </div>
        </>
    )
}