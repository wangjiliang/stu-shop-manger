import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000
})

instance.interceptors.request.use( config => {
  if (localStorage.getItem('token')) {
    config.headers['token'] = localStorage.getItem('token')
  }
  return config;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use( response => {
  return response.data;
},  error => {
  return Promise.reject(error);
});


export function get (url, params) {
  return instance.get(url, params)
}

export function post (url, data) {
  return instance.post(url, data)
}

export function put (url, data) {
  return instance.put(url, data)
}

export function del (url) {
  return instance.delete(url)
}