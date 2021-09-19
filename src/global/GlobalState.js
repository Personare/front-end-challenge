import Context from './Context'
import {useState} from 'react'
import axios from 'axios'


const GlobalState = (props)=>{
	const imageBackCard = "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png"
	const imagesUrl = "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341"
	const [cards, setCards] = useState([])	


//=================Funções=====================
	const getCards = ()=>{
		axios.get('tarot.json').then(res=>{
			setCards(res.data.cards)
			console.log(res.data.cards)
		}).catch(err=>{
			alert('Algo deu errado!')
		})
	}



	const states = {imagesUrl, imageBackCard, cards}
	const setters = {}
	const requests = {getCards}
	

 	return<Context.Provider value={{states, setters, requests}}>
			{props.children}
		  </Context.Provider>

}
export default GlobalState