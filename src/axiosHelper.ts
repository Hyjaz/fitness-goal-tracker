import axios, { AxiosInstance } from 'axios'
var axiosInstance: AxiosInstance

const getAxiosInstance = (): AxiosInstance => {
  const baseURL = `http://${process.env.BASEURL}`
  if (axiosInstance) {
    return axiosInstance
  }
  axiosInstance = axios.create({ baseURL })
  return axiosInstance
}

export const a = getAxiosInstance()