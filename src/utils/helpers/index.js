const axios = require('axios')

const getRepos = (api) => {
  return api.request({
    url: 'https://crossorigin.me/https://api.mosgorpass.ru/v3/stop?perPage=500&page=2',
    method: 'get',
  })
}

const api = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const helpers = {
  getData: () => {
    return axios.all([getRepos(api)])
    .then((response) => {
      return response[0].data.data
    })
  },
}

module.exports = helpers
