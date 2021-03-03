import { combineReducers } from 'redux'
import { productsReducer as products } from 'redux/reducers/products'

const reducers = combineReducers({
  products
})

export default reducers
