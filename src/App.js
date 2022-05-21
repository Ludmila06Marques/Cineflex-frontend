import Tela1 from "./Componentes/Tela1";
import Logo from "./Componentes/Logo";
import{BrowserRouter , Routes , Route } from "react-router-dom"
import Tela2 from "./Componentes/Tela2";
import Tela3 from "./Componentes/Tela3";
import Tela4 from "./Componentes/Tela4";

export default function App(){
return(
    <>
    <Logo/>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Tela1/>}> </Route>
        <Route path="/sessoes/:idFilme" element={<Tela2  />}></Route>
        <Route path="/assentos/:idSessao" element={<Tela3/>}></Route>
        <Route path="/sucesso" element={<Tela4/>}></Route>
        <Route path="/" element={<Tela1/>}></Route>
    </Routes>
    
    </BrowserRouter>

    </>
    
)
}