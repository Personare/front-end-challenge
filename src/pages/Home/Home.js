import {useState, useEffect} from 'react'
import axios from 'axios'
import './style.css'


const Home = (props)=>{
	const [cards, setCards] = useState([])

	useEffect(()=>{
    axios.get('tarot.json').then(res=>{
      setCards(res.data.cards)
    }).catch(err=>{
      alert('Algo deu errado!\n'+err.response)
    })
  }, [])



	const imageUrl = 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341'	

	return<div>			
			<div className='btn'>
			<button className='btn-play' onClick={()=> props.changePage('intro')}>Jogar</button>
			</div>
			<div className='cardShowed'>
			{cards.length > 0 ? cards.map(card=>{
				return <div className='cards' key={card.name}>
						{card.name}
						<div>
							<img className='character' src={`${imageUrl}/${card.image}`}/>
						</div>
					   </div>
			}) : <div className='load-container'>
					<div className='loading'></div>
				</div>}
		  </div>
		</div>
}
export default Home