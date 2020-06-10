import { get, post, put, del } from '../utils/http'

export function listApi (page=1) {
  return get('/posts', { page })
}

export function createApi (data) {
  return post('创建商品url', data)
}

export function modifyApi (id) {
  return put(`修改商品url${id}`)
}

export function deleteApi (id) {
  return del(`删除商品url${id}`)
}


