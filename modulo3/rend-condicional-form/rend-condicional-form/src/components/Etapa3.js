import React, { useState } from "react";
import { Formulario } from "../Style";

export default function Etapa3() {
    const [inputTerminou, setInputTerminou] = useState(null)
    
    const [inputComplementar, setInputComplementar] =useState([ 
        {curso: null}
     ])


return (
    <Formulario>
        <h1>INFORMAÇÕES GERAIS DE ENSINO</h1>
        
        <label>5. Por que você não terminou o curso de graduação?</label>
        <input type="text" value={(inputTerminou)}></input>


        <label>6. Você fez algum curso complementar?</label>
        <select className="escolaridade">
            <option value={inputComplementar.curso}>Curso técnico</option>
            <option value={inputComplementar.curso}>Cursos de inglês</option>
            <option value={inputComplementar.curso}>Não fiz curso complementar</option>
        </select>

        <button>Avançar</button>

    </Formulario>
)

}