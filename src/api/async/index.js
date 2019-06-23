import axios from '@/api/axios'

// 同步接口调用返回值
const async = {
  async getRate(params, callback) {
    const promise = await axios.get('/rate', { params: params })
    return promise.then(({ data }) => {
      return data
    }).catch((err) => {
      console.log(err)
      return ''
    })
  }
}
export default async
