import "./Tela2.css"
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import {useEffect ,  useState} from "react"
import axios from "axios"
import React from "react"

function Sessao({filme}){
    return(
        <>
                  <div className="data"><h1>{filme.weekday} - {filme.date}</h1></div>
                    <div className="horas">
                         <Link  to={`/assentos/1 `}>
                         <div className="hora"><h1>15:00</h1></div>
                         </Link>
                        
                         <Link to="/assentos/:idSessao">
                         <div className="hora"><h1>15:00</h1></div>
                         </Link>
                    </div>
                    </>
    )

}





export default function Tela2(){

    const {idFilme}= useParams()
    const [filme , setFilme]= React.useState({})
   


useEffect(()=>{
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

    promise.then(response=>{
    setFilme({...response.data})

    })
},[])
    

    return(<>
  
        <div className="conteudo">
            <div className="pergunta"><h1>Selecione o horário</h1></div>
            <div className="horarios">
                <div className="horario">
                    <Sessao filme={filme}/>
                </div>             
            </div>
        </div>
        <div className="footer">
        <div className="filme-escolhido"><img src={filme.posterURL}/></div>
        <div className="titulo"><h1>{filme.title}</h1></div>
        </div>
        </>
    )
}