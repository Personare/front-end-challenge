
export const apiBase = 'https://raw.githubusercontent.com/Personare/front-end-challenge/master/'
export const apiTarotEndpoint = 'tarot.json'

export const listTarot = () => {
  return fetch(`${apiBase}/${apiTarotEndpoint}`)
  .then(response => response.json())
}
