import styled from "styled-components";


export const MainContainer=styled.div`
    display: grid;
    justify-content: center;
`

export const DivFooter=styled.div`
    text-align: center;
    color: blue;
`

export const DivChat=styled.div`
    width: 900px;
    height: 750px;
    border-radius: 6px;
    background-color: #cbe0e9;
`
export const DivForm=styled.form`
    bottom: 30px;
    position: fixed;
    width: 100%;
    text-align: center;

    .nome{
        padding: 5px 8px;
        margin-right: 10px;
        border-color: blue;
        border-style: solid;
        border-radius: 5px;
    }

    .mensagem{
        padding: 5px 120px;
        margin-right: 10px;
        border-color: blue;
        border-style: solid;
        border-radius: 5px;

    }
    button{
        padding: 6px 15px;
        margin-right: 10px;
        border: none;
        background-color: blue;
        color: white;
        border-radius: 5px;

    }
`

export const DivMensagens=styled.div`
    display: flex;
    align-items: center;
    h4{
        color: blue;
    }

    p{
        margin-left: 10px;

    }
    button{
        margin-left: 20px;
        background-color: none;
        border: none;
    }
    button:hover{
        display: flex;
        background-color: orange;
        
    }
`