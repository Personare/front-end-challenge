import {useEffect, useState, useContext} from 'react'
import TarotCard from '../components/TarotCard'
import styled from 'styled-components'
import axios from 'axios'
import Context from '../global/Context'


const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`

//====================Componente funcional===========
const Home = (props)=>{
	const {states, setters, requests} = useContext(Context)


	useEffect(()=>{
		requests.getCards()
	}, [])

		
	
	return<div><p className='btn'><button onClick={()=> props.changePage('cheap')}>Jogar</button></p>
			<Container>			
				{states.cards.map(card=>{
					return<TarotCard key={card.name}
							name={card.name}
							image={card.image}/>
				})}
		    </Container> 
			  
		  </div>
}
export default Home
