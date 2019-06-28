import axios from '@/api/axios'

const mock = {
  findLGet(params, callback) {
    axios.get('/findLGet', { params: params }).then(({ data }) => {
      callback(true, data)
    }).catch((err) => {
      callback(false, err)
    })
  },
  submitPost(params, callback) {
    axios.post('/submitPost', params).then(({ data }) => {
      callback(true, data)
    }).catch((err) => {
      callback(false, err)
    })
  },
  fetchList(params, callback) {
    axios.get('/article/list', { params: params }).then(({ data }) => {
      callback(true, data)
    }).catch((err) => {
      callback(false, err)
    })
  }
}
export default mock
