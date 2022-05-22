//PROBLEMAS:
// - Nao estou conseguindo pegar os dados de showtimes (hora e id)


import "./Tela2.css"
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import {useEffect ,  useState} from "react"
import axios from "axios"
import React from "react"
import Footer from "./Footer"


function Sessao({weekday , date , name , idSessao, index}){

    return(
        <>
                  <div className="data"><h1>{weekday} - {date} </h1></div>
                    <div className="horas">
                         <Link  to={`/assentos/${idSessao} `}>
                         <div className="hora"><h1>15:00</h1></div>
                         </Link>
                        
                         <Link to={`/assentos/${idSessao} `}>
                         <div className="hora"><h1>19:00</h1></div>
                         </Link>
                    </div>
                    </>
    )
  
}

//Funcao que vai inserir as datas
export default function Tela2(){

    const {idFilme}= useParams()
    const [filme , setFilme]= React.useState({})
    const[ dia , setDia]=React.useState([])
    const[horas , setHoras]=React.useState([])
    console.log(dia)


    //Pega as sessoes da api referente ao id do filme
    useEffect(()=>{
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
    promise.then(response=>{
    setFilme({...response.data})
    setDia([...response.data.days])
 
 
    })
},[idFilme])
  
    return(<>
  
        <div className="conteudo">
            <div className="pergunta"><h1>Selecione o horário</h1></div>
            <div className="horarios">
                <div className="horario">                 
         
                { 
           dia.map((item , index)=> <Sessao key={index} index={index}  weekday={item.weekday} date={item.date}  name={item.name} idSessao={item.id} /> )
         
           } 
             


                </div>             
            </div>
        </div>
      <Footer filme={filme}/>
        </>
    )
   
}