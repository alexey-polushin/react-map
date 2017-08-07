const axios = require('axios')

const getRepos = (api) => {
  return api.request({
    url: 'https://api.mosgorpass.ru/v3/stop?perPage=50&page=2',
    method: 'get',
  })
}

const send = (api, params) => {
  return api.request({
    params,
    url: 'https://api.mosgorpass.ru/v3/stop?perPage=500&page=2',
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
  sendData: (params) => {
    return axios.all([send(api, params)])
    .then(() => {
      return 'ok'
    })
  },
}

module.exports = helpers
