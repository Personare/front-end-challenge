

const Detail = (props)=>{
	const imageUrl = 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341'
	const setShowAndHide = props.setShowAndHide

	return<div className='popup'>
			<div>{props.name}</div>
			<img src={`${imageUrl}/${props.image}`}/>
			<p>Descrição:<br/>Lorem ipsum dolor sit amet. In sunt architecto aut 
			accusantium minima aut earum odio sit consequatur officiis. Et iusto 
			quos ea modi suscipit et doloribus mollitia quo eligendi dolore qui 
			facilis accusamus aut deserunt eaque.</p>
			<button className='btn-back' onClick={()=> setShowAndHide(false)}>
			Voltar</button> 
		  </div>
}
export default Detail