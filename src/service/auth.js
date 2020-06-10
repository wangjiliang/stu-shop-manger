import { post } from '../utils/http'

export function loginApi (user) {
  return post('登录的接口地址', user)
}

