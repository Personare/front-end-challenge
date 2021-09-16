import {useRef} from 'react'

const Detail = (props)=>{
	const imageUrl = 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341'
	const setShowAndHide = props.setShowAndHide
	const resultado = useRef(null)

	const found = ()=>{
		if(props.name === props.randomCard.name){
			alert(`Parabéns! você encontrou ${props.randomCard.name}`)
		}else{
			alert(`Você não encontrou ${props.randomCard.name}`)
		}
	}

	return<div className='popup'>
			<div>{props.name}</div>
			<img src={`${imageUrl}/${props.image}`}/>
			<p>Descrição:<br/>Lorem ipsum dolor sit amet. In sunt architecto aut 
			accusantium minima aut earum odio sit consequatur officiis. Et iusto 
			quos ea modi suscipit et doloribus mollitia quo eligendi dolore qui 
			facilis accusamus aut deserunt eaque.</p>
			<div ref={resultado}></div>
			<button className='btn-back' onClick={()=> setShowAndHide(false)}>
			Voltar</button>
			{found()} 
		  </div>
}
export default Detail