import { types } from 'redux/types'

export const initialState = {
  data: null,
  isLoading: true,
  error: null
}

export const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.GET_PRODUCT:
      return {
        ...state,
        error: null,
        isLoading: true,
        data: null
      }
    case types.GET_PRODUCT_ERROR:
      return {
        ...state,
        data: null,
        error: action.payload?.message || 'error',
        isLoading: false
      }
    case types.GET_PRODUCT_SUCCESS:
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
