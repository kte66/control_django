import axios from 'axios'

let base = 'http://127.0.0.1:8000/dj_api/' //写入基本路径

export const postRequest = (url='',params) => {
return axios({
   baseURL:base,
   url: url,
   method:'post',
   data: params,
   timeout:3000
})
}

export const getRequest = (url='',params) => {
   return axios({
      baseURL:base,
      url:url,
      method:'get',
      params: params,
      timeout:3000
   })
}

export const delRequest = (url='',params) => {
   return axios({
      baseURL:base,
      url:url,
      method:'delete',
      data: params,
      timeout:3000
   })
}

export const putRequest = (url='',params) => {
   return axios({
      baseURL:base,
      url:url,
      method:'put',
      data: params,
      timeout:3000
   })
}

