import axios from 'axios'
export const testIndex = 'http://v-api.local/test'

export const getIndex = (index) => {
  return axios.get(index).then(res => {
    return res.data.data
  })
}

export const getDetail = (index, id) => {
  return axios.get(index + '/' + id).then(res => {
    return res.data.data
  })
}

