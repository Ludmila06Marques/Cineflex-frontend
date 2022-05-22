

export default function Footer({filme}){
    return(
        <div className="footer">
        <div className="filme-escolhido"><img src={filme.posterURL}/></div>
        <div className="titulo"><h1>{filme.title}</h1></div>
        </div>
    )
}