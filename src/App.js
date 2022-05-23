import Logo from "./Logo"
import Tela1 from "./Tela1"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Tela2 from "./Tela2"
import Tela3 from "./Tela3"
import Tela4 from "./Tela4"
import { useState } from "react"

export default function App() {
    const[name , setName]=useState(" ")
    const[cpf , setCpf]=useState(" ")
    const [filme, setFilme] =useState([])
    const [poster, setPoster] = useState([]) 
    const [horario, setHorario] = useState([])

    return (
        <>
        <Logo />
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Tela1 filme={filme} setFilme={setFilme} />} />
                <Route path="/sessoes/:idFilme" element = {<Tela2 poster={poster} setPoster={setPoster} horario={horario} setHorario={setHorario} />} />
                <Route path="/assentos/:idSessao" element = {<Tela3 setName={setName} setCpf={setCpf} name={name} cpf={cpf} poster={poster} setPoster={setPoster}  />} />
                <Route path="/sucesso" element={<Tela4 name={name} cpf={cpf}  filme={filme} poster={poster} horario={horario} />}></Route>
                <Route path="/" element={<Tela1 />}></Route>
            </Routes>
        </BrowserRouter>

        </>

    )
}