import axios from "axios"


export const httpApi = axios.create({
  baseURL: 'http://localhost:8888/api/timeseries/v0.2/smartcampusmaua',
  headers: {
    'Content-Type': 'application/json'
  }
})