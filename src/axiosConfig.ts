import axios, { AxiosInstance } from 'axios'
var axiosInstance: AxiosInstance

export function defaultAxios(): AxiosInstance {
  const baseURL = 'http://localhost:8080/'
  if (axiosInstance) {
    return axiosInstance
  }
  axiosInstance = axios.create({ baseURL })
  return axiosInstance
}
