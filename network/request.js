import axios from 'axios'
import { IS_DEV } from '@/assets/js/env'
const url = 'http://localhost:3333/web/api'
function request(config) {
  const instance = axios.create({
    // baseURL: 'http://101.201.199.139/web/api',
    baseURL: '/web/api',
    timeout: 5000,
  })

  instance.interceptors.request.use(
    (config) => {
      return config
    },
    (err) => {}
  )

  instance.interceptors.response.use(
    (res) => {
      return res
    },
    (err) => {}
  )

  return instance(config)
}

export { request }
