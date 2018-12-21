import uuidv4 from 'uuid/v4'

export default ({ imagesUrl, imageBackCard, cards }) => {
  const newCards = cards.map(card => ({
    ...card,
    imageBackCard,
    imageUrl: `${imagesUrl}${card.image}`,
    key: uuidv4(),
  }))

  return {
    imagesUrl,
    imageBackCard,
    cards: newCards,
  }
}
