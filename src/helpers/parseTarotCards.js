export default ({ imagesUrl, imageBackCard, cards }) => {
  const newCards = cards.map((card, index) => ({
    ...card,
    imageBackCard,
    imageUrl: `${imagesUrl}${card.image}`,
    index,
  }))

  return {
    imagesUrl,
    imageBackCard,
    cards: newCards,
  }
}
