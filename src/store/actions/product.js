import actionTypes from '../actionTypes'
import { listApi } from '../../service/product'

export const loadProduct = payload => async dispatch => {
  console.log(payload)
  const res = await listApi()
  // 当异步操作完成之后通过dispatch触发reducer改变数据
  dispatch({
    type: actionTypes.PRODUCT_LOADED,
    payload:res
  })
}