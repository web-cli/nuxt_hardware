import axios from 'axios'

function request(config) {

  const instance = axios.create({
    // baseURL: 'http://101.201.199.139/web/api',
    baseURL: 'http://129.204.140.71:3333/web/api' || '/web/api',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  instance.interceptors.response.use(res => {
    return res
  }, err => {

  })

  return instance(config)

}

export {
  request
}