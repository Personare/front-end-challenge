export default url => (
  fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json()
      }

      throw new Error('Request failed')
    })
    .catch(error => ({ error }))
)
