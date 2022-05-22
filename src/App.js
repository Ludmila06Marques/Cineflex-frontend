import Logo from "./Logo"
import Tela1 from "./Tela1"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Tela2 from "./Tela2"
import Tela3 from "./Tela3"
import Tela4 from "./Tela4"

export default function App() {


    return (
        <>
        <Logo />
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Tela1 />} />
                <Route path="/sessoes/:idFilme" element = {<Tela2 />} />
                <Route path="/assentos/:idSessao" element = {<Tela3 />} />
                <Route path="/sucesso" element={<Tela4  />}></Route>
                <Route path="/" element={<Tela1/>}></Route>
            </Routes>
        </BrowserRouter>

        </>

    )
}