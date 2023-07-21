import axios from 'axios'
export const fruitApi = 'http://v-api.local/fruit'

export const getIndex = (url) => {
  return axios.get(url).then(res => {
    return res.data.data
  })
}

export const getDetail = (url, id) => {
  return axios.get(url + '/' + id).then(res => {
    return res.data.data
  })
}

export const postData = (url, data) => {
  return axios.post(url, data).then(res => {
    return res.status
  })
}

