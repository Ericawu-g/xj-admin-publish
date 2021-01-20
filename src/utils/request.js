import axios from 'axios'

const request = axios.create({
  baseURL: 'http://119.3.104.39:2302/' // 请求基础路径
})

export default request
