import Image from 'next/image'

import * as S from './styles'

export type CardProps={
    imagesUrl:string;
    name: string;
    image: string;
}

const CardInterpretation = ({image, name, imagesUrl}: CardProps) =>(
  <S.CardList >
    <S.CardImage >
      <Image width={120} height={200} src={`${imagesUrl}${image}`} alt={name} />
    </S.CardImage>

    <S.CardDescription >
      <S.CardTitle >
        {name}
      </S.CardTitle>
      <S.CardInterpretation >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut tempor id magna in bibendum.
          Morbi iaculis scelerisque ex ac euismod.
          Nullam eleifend vestibulum vestibulum.
          Etiam interdum orci in justo venenatis congue.
          Vestibulum sed mollis massa, et placerat purus.
          Vestibulum non pellentesque ante, a ullamcorper metus.
          Suspendisse maximus accumsan venenatis.
          Aenean suscipit, tortor eu rutrum tempor, purus erat iaculis mauris, sagittis molestie sem justo quis quam.
          Suspendisse potenti.
          Ut venenatis placerat diam, sit amet consequat justo tempus quis.
      </S.CardInterpretation>
    </S.CardDescription>
  </S.CardList>
)

export default CardInterpretation;
