import axios from 'axios'

export const getCards = () => axios.get('tarot.json').then(({ data }) => data)
