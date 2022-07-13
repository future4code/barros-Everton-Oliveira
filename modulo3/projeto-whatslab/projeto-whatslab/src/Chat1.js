import { useState } from "react";
import { DivChat, DivFooter, DivForm, DivMensagens, MainContainer } from "./style";

export default function Chat(){

    const [enviador, setEnviador]=useState("")
    const [torpedo, setTorpedo]=useState("")

    const [arrayChat, setArrayChat]=useState([
        {nome: "", mensagem: ""}
    ])

    const arrayChats= arrayChat.map((item, index)=>{
        return(
            <DivMensagens key={index}>
                <h4>{item.nome} </h4>
                <p>{item.mensagem}</p>
            </DivMensagens>
        )
    })

    const AddEnviador = (event)=>{
        setEnviador(event.target.value)
    }

    const AddTorpedo = (event)=>{
        setTorpedo(event.target.value)
    }

    const enviarMensagem=(event)=>{
        event.preventDefault()
        const atualizarArray = [...arrayChat,{nome: enviador, mensagem: torpedo}]
        setArrayChat(atualizarArray)
        setTorpedo("")
    }   


    return(
        <MainContainer>
            <DivFooter>
                <h1>WhatsLab</h1>
            </DivFooter>
        <DivChat>
        <ul>
            {arrayChats}
        </ul>
        </DivChat>
        <DivForm>
            <input className="nome" type="text" required placeholder="Nome" value={enviador} onChange={AddEnviador}></input>
            <input id="enviar" className="mensagem" type="text" required placeholder="Mensagem" value={torpedo} onChange={AddTorpedo}></input>
            <button onClick={enviarMensagem}>Enviar</button>
        </DivForm>

        
        </MainContainer>
       
    )

}