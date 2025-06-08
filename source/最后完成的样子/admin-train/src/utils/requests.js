import axios from 'axios'

const request_instance = axios.create({

    baseURL: 'http://localhost:9088',
    timeout: 5000,//请求超时时间为5000毫秒
})

export default request_instance;