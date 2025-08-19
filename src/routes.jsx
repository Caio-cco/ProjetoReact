import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from"./pages/JSX/Inicio"
import E1 from "./pages/JSX/E1";
import E10 from "./pages/JSX/E10";




export default function Navegacao(){
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/e1" element={<E1/>} /> 
              <Route path="/e10" element={<E10/>} />    
            </Routes>
        </BrowserRouter>
    )
}