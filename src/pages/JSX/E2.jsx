import { useState } from "react";
import '../style/style2.scss'
import { Link, Links } from 'react-router';

export default function Inicio (){
    const [numero, setNumero] = useState(0)
    const [num1, setNum1] = useState(0)


function converterPeso () {

     let resultado = Number(num1) * 1000
     setNumero(resultado)
}

return(
    <div>
        <header className="header">
            <div className="cabec">
                <img src="/src/assets/images/frei.webp" height={40} />
                <h1 className="h1">React FreiS</h1>
            </div>
            <div className="li"> 
                <Link to = {"/"} className="link">
                <li>Inicio</li>
                </Link>
                <li>Sobre</li>
            </div>
        </header>
        <main>
            <div className="main">
                <Link to = {"/"} >
                <img src="/src/assets/images/seta.webp" height={40} />
                </Link>
                <h1 className="titulo"> Exercicio 02 - Converter kg/grama</h1>
            </div>
            
            <div class="linha-amarela"></div>
            
            <div className="enunciado">
                 <p className="card">Implementar um programa em Java Script para converter kilos em gramas.</p>
            </div>
    <div className="contas">  
         <div className="card2">
             <h3 className="text">Valor em kilos.</h3>
             <input value={num1} onChange={(e) => setNum1(e.target.value)} />
             <br />
             <div className="local">
                 <button className="botao" onClick={converterPeso}>executar</button>
             </div>
            </div>
          </div> 
        <h2>Resultado: O total é {numero} gramas</h2>
        </main>
    </div>

    
)
}