
import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 2000,
    headers: { "X-Custom-Header": "foobar" }
})

// instance.interceptors.request.use((request) =>{
//     const accessToken = getTokenAccess()
//     const accessHeader = `Bearer ${accessToken}`
//     request.headers!["Authorization"] = accessHeader
//     return request
// })