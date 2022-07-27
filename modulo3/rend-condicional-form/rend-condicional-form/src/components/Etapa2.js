import React, { useState } from "react";
import { Formulario } from "../Style";

export default function Etapa2() {
    const [inputCurso, setInputCurso] = useState(null)
    const [inputUnidade, setInputUnidade] = useState(null)



return (
    <Formulario>
        <h1>INFORMAÇÕES DO ENSINO SUPERIOR:</h1>
        
        <label>5. Qual o seu curso?</label>
        <input type="text" value={(inputCurso)}></input>

        <label>6. Qual a unidade de ensino?</label>
        <input type="text" value={(inputUnidade)}></input>


        <button>Avançar</button>

    </Formulario>
)

}