import React from 'react'
import './style.css'


export function SecaoComentario(props) {
	function onChangeComentario(write) {
		console.log(write)
	}

	return (
		<div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={''}
				onChange={e => onChangeComentario(e.target.value)}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}