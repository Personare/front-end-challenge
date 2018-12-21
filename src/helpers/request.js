const getOptions = (method, data) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }

  if (data) {
    options.body = JSON.stringify(data)
  }

  return options
}

const makeFetch = (method, url, data) => (
  fetch(url, getOptions(method, data))
    .then(res => {
      if (res.ok) {
        return res.json()
      }

      throw new Error('Request failed')
    })
    .catch(error => ({ error }))
)

const request = {}
request.get = makeFetch.bind(null, 'GET')
request.post = makeFetch.bind(null, 'POST')
request.put = makeFetch.bind(null, 'PUT')
request.delete = makeFetch.bind(null, 'DELETE')

export default request
