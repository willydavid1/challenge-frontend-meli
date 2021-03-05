import { combineReducers } from 'redux'
import { productsReducer as products } from 'redux/reducers/products'
import { productReducer as product } from 'redux/reducers/product'

const reducers = combineReducers({
  products,
  product
})

export default reducers
