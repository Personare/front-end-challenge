export default cards => {
  cards.sort(() => 0.5 - Math.random())
  return cards
}
