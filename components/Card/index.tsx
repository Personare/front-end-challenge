import Image from 'next/image'
import * as S from './styles'

type CardProps = {
  imagesUrl: string;
  name: string;
  flipped?: boolean;
  image: string;
  handleClick?:(name: string)=> void;
}
const Card = ( {flipped = false, image, handleClick, name, imagesUrl}: CardProps) => {
  const handleClickfn = (name: string) =>{
    if(handleClick){
      handleClick(name)
    }
  }
  return(
    <S.Card onClick={() => handleClickfn(name)}>           
      <S.CardContent flipped={flipped}>
        <S.CardFaceBack />
        <S.CardFaceFront>
          <Image width={120} height={200} src={`${imagesUrl}${image}`} alt={name} />
        </S.CardFaceFront>
      </S.CardContent>
    </S.Card> 
  )
}
export default Card;
