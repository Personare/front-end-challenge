import {useState, useEffect} from 'react'
import Cards from '../../components/Cards'
import axios from 'axios'
import '../../App.css'


const Introduction = (props)=>{
	const [cards, setCards] = useState([])

	useEffect(()=>{
    axios.get('tarot.json').then(res=>{
      setCards(res.data.cards)
    }).catch(err=>{
      alert('Algo deu errado!\n'+err.response)
    })
  }, [])

  cards.sort(()=> Math.random() - 0.5)
  
	
	return<div className='card-container'>
      <div><button className='btn-paginaInicial'
      onClick={()=> props.changePage('home')} >Página inicial</button></div>
      {cards.map(card=>{
        return<Cards key={card.name}
                name={card.name}
                image={card.image}/>           
      })}
      </div>
}
export default Introduction