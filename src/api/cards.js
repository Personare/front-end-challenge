const URL_JSON = './assets/tarot.json';

const getDataValueParsed = (data = {}) => (
  data.value ? JSON.parse(String.fromCharCode.apply(null, data.value)) : {}
)

const readJSON = response => {
  const reader = response.body.getReader();
  return reader.read()
    .then(getDataValueParsed)
    .catch(error => { throw error })
}

const getCardInfos = async () => {
  try {
    const response = await fetch(URL_JSON, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return readJSON(response)
  } catch(error) {
    throw error
  }
}

export {
  getCardInfos
}