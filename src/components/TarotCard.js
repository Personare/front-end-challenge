import styled from 'styled-components'
import {useState, useContext} from 'react'
import Context from '../global/Context'

//================Estilização========================
const Card = styled.div`
	margin-bottom: 10px;
	div{
		text-align: center;
	}
`

//=============Inicio do componente==================
const TarotCard = (props)=>{
	const {states, setters, requests} = useContext(Context)
	

	return<Card className='fade'>
				<div>{props.name}<br/>
					<img src={`${states.imagesUrl}/${props.image}`}/>
				</div>
		  </Card>
}
export default TarotCard