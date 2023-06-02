import React, { useEffect, useState } from 'react';
import tarotData from '../tarot.json'
import { Card, ImageCard } from '../styles/CardStyle';

const TarotComponent = () => {
  const [cards, setCards] = useState([]);
  const [imageBackCard, setImageBackCard] = useState('');
  const [imagesUrl, setImagesUrl] = useState('');


  useEffect(() => {

      try {
        setCards(tarotData.cards)
        setImageBackCard(tarotData.imageBackCard)
        setImagesUrl(tarotData.imagesUrl)


      } catch (error) {
        console.error('Error fetching tarot data:', error);
      }
  

  }, []);

  // Concatenate the image URLs
  const processedCards = cards.map((card) => {
    const imageUrl = imagesUrl + card.image;
    return { ...card, image: imageUrl };
  });


  return (
    <div>
      {processedCards.map((card) => (
      <Card key={card.name} >
          <ImageCard src={card.image} alt={card.name} />
          <ImageCard src={imageBackCard} alt="Back of Card" />
      </Card>
      ))}
    </div>
  );
};

export default TarotComponent;
