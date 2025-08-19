import { useState } from "react";
import '../style/style3.scss'
import { Link, Links } from 'react-router';

export default function Inicio (){
    const [numero, setNumero] = useState(0)
    const [acaiP, setacaiP] = useState(0)
    const [acaiM, setacaiM] = useState(0)
    const [acaiG, setacaiG] = useState(0)


function calcularPedido () {

     let resultado = (Number(acaiP) * 13.5) + (Number(acaiM) * 15) + (Number(acaiG) * 17.5)
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
                 <p className="card">Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente.</p>
            </div>
    <div className="contas">  
        <div class="card-container">
            <div className="separar">
            <div class="input-group">
                <label for="quantidade-pequeno">Quantidade pequeno</label>
                <input value={acaiP} onChange={(e) => setNum1(e.target.value)}/>
            </div>
            
            <div class="input-group">
                <label for="quantidade-medio">Quantidade médio</label>
                <input value={acaiM} onChange={(e) => setNum1(e.target.value)}/>
            </div>
            
            <div class="input-group">
                <label for="quantidade-grande">Quantidade grande</label>
                <input value={acaiG} onChange={(e) => setNum1(e.target.value)} />
            </div>
            </div>
            <div className="teste">
            <button class="executar-btn">Executar</button>
            </div>
            </div>
          </div> 
        <h2>Resultado: O total é {numero} gramas</h2>
        </main>
    </div>

    
)
}