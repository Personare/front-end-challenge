import axios from 'axios'

const getCards = () => axios.get('tarot.json').then(({ data }) => data)

export default getCards
