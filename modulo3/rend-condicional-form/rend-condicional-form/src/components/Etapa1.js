import React, { useState } from "react";
import { Formulario } from "../Style";

export default function Etapa1() {
    const [inputNome, setInputNome] = useState(null)
    const [inputIdade, setInputIdade] = useState(null)
    const [inputEmail, setInputEmail] = useState(null)
    const [inputEscolaridade, setInputEscolaridade] =useState([ 
        {nivel: null}
     ])


return (
    <Formulario>
        <h1>Dados gerais:</h1>
        
        <label>1. Qual o seu nome?</label>
        <input type="text" value={(inputNome)}></input>

        <label>2. Qual a sua idade:</label>
        <input type="text" value={(inputIdade)}></input>

        <label>3. Qual o meu email?</label>
        <input type="text" value={(inputEmail)}></input>

        <label>4. Qual a sua escolaridade?</label>
        <select className="escolaridade">
            <option value={inputEscolaridade.nivel}>Ensino Médio Incompleto</option>
            <option value={inputEscolaridade.nivel}>Ensino Médio Completo</option>
            <option value={inputEscolaridade.nivel}>Ensino Superior Incompleto</option>
            <option value={inputEscolaridade.nivel}>Ensino Superior Incompleto</option>
        </select>

        <button>Avançar</button>

    </Formulario>
)

}