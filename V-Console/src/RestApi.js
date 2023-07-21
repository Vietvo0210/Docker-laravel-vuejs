import axios from 'axios'
export const testApi = 'http://v-api.local/test'

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

