import styled from "styled-components"
import { Link } from 'react-router-dom';


export default function Hora ({ showtimes  }) {

  


    return(
        <BlocoHora>
            {showtimes.map((props,index) =>

                <Link  to={`/assentos/${props.id}`}>
                    <Conjunto
                    time={props.name}
                    timeId={props.id}
                    key={index}
                    index={index}
                    >
                        <H1>
                    {props.name}
                    </H1>
                    
                    </Conjunto>
                </Link> )
                }

        </BlocoHora>
    )


}


const BlocoHora = styled.div`
display:flex;
//&:last-child{
    //margin-bottom: 100px;
//}

`

const Conjunto = styled.div`
width: 83px;
height:43px;
background-color: #E8833A;
color:white;
margin-bottom: 23px;
margin-top: 23px;
margin-right: 8px;
border-radius:3px;
display:flex;
justify-content: center;
align-items: center;

`
const H1= styled.h1`
font-size:18px;
color: #FFFFFF;
text-decoration: none;
`