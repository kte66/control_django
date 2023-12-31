/*引入axios*/
import axios from 'axios'
const request = axios.create({
    baseURL: 'http://127.0.0.1:8000/dj_api/', // 基础路径,将统一的部分全部封装
    timeout: 5000,
    withCredentials: true // 表示请求可以携带cookie
})

//前端采用export.default，在写后端代码时用module.export
export default request