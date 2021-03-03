import { types } from 'redux/types'

export const initialState = {
  data: null,
  isLoading: false,
  error: null,
  searchProduct: ''
}

export const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SEARCH_PRODUCT:
      return {
        ...state,
        searchProduct: action.payload.valueToSearch
      }
    case types.GET_PRODUCTS:
      return {
        ...state,
        error: null,
        isLoading: true
      }
    case types.GET_PRODUCTS_ERROR:
      return {
        ...state,
        data: null,
        error: action.payload?.message || 'error',
        isLoading: false
      }
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false
      }
    default:
      return state
  }
}
