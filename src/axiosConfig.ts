import axios, { AxiosInstance } from 'axios'
var axiosInstance: AxiosInstance

export function defaultAxios(): AxiosInstance {
  const baseURL = `http://${process.env.BASEURL}`
  if (axiosInstance) {
    return axiosInstance
  }
  axiosInstance = axios.create({ baseURL })
  return axiosInstance
}
