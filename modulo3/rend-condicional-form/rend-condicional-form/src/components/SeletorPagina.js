import React, { useState } from "react";
import Etapa1 from "./Etapa1";


const SeletorPagina=()=>{
    const [avancarPagina,setAvancaPagina]=useState(false)

    if (logado===true){
        return(
            <TelaHome estarLogado={setLogado}/>
        )
    }else{
        return(
            <TelaDeLogin estarLogado={setLogado}/>
        )
    }
    
}
export default SeletorPagina;