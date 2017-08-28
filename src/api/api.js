
const apiBase = 'https://raw.githubusercontent.com/Personare/front-end-challenge/master/'
const apiTarotEndpoint = `${apiBase}/tarot.json`

export const listTarot = (searchQuery) => {
  return fetch(apiTarotEndpoint)
  .then(response => response.json())
  .then(json => ({ results: json.results }))
}
