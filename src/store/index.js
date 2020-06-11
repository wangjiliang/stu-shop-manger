import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import notice from './reducers/notice'
import product from './reducers/product'

const reducers = combineReducers({
  notice,
  product
})

export default createStore(reducers, compose(applyMiddleware(...[thunk])))


