import {useState, useRef} from 'react'
import Detail from './Detail'
import '../App.css'

const Cards = (props)=>{
	const [showAndHide, setShowAndHide] = useState(false)	


	const imageUrl = 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341'
	const imageBackCard = 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'

	return<div className='card'>			
			{showAndHide ? <Detail image={props.image} setShowAndHide={setShowAndHide}
			name={props.name}/> : null}
			{!showAndHide ? <img className='back' src={imageBackCard}
			onClick={()=> setShowAndHide(true)}/> : null}
			<div>{showAndHide ? props.name : null}</div>
			{showAndHide ? <img className='character' src={`${imageUrl}/${props.image}`}/>
			: null}
		  </div>
}
export default Cards