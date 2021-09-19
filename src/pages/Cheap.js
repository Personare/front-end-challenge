import {useContext, useEffect} from 'react'
import Context from '../global/Context'
import styled from 'styled-components'
import CheapCard from '../components/CheapCard'

//+++++++============Estilo====================
const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`
//==================Component==================
const Cheap = ()=>{
	const {states, requests} = useContext(Context)

	useEffect(()=>{
		requests.getCards()
	}, [])

	states.cards.sort(()=> Math.random() - 0.5)
	
	const random = Math.floor(Math.random() * states.cards.length)
	const shuffleName = states.cards[random].name

//==================Renderização===================
			   
	return<div><p className='btn'><button onClick={()=> window.location.reload()}>Reiniciar</button></p>
			<Container>
				{states.cards.map(card=>{
					return<CheapCard key={card.name}
							name={card.name}
							image={card.image}
							shuffleName={shuffleName}/>
				})}
		    </Container>
		  </div>
}
export default Cheap