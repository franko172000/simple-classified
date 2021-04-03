import axios from 'axios'
import store from 'store'
import { notification } from 'ant-design-vue'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/',
})

apiClient.interceptors.request.use(request => {
  const accessToken = store.get('accessToken')
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`
    request.headers.AccessToken = accessToken
  }
  return request
})

apiClient.interceptors.response.use(undefined, error => {
  const { response } = error
  const { data } = response
  if (data) {
    if(data.token_expired){
        store.remove('accessToken');
        window.location.href = '/auth/login';
    }
    notification.error({
      message: data.message,
    })
  }
  return Promise.reject(error)
})

export default apiClient