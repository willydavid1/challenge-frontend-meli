import { types } from 'redux/types'
import { apiResquest } from 'tools'

export const getProducts = (query = '') => async (dispatch, getState) => {
  const { products } = getState()
  if (products.data && products.isLoading) return

  dispatch({
    type: types.GET_PRODUCTS
  })
  try {
    const { data: payload } = await apiResquest(`/api/items?q=${encodeURIComponent(query)}`)
    dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload
    })
  } catch (error) {
    dispatch({
      type: types.GET_PRODUCTS_ERROR,
      payload: {
        message: error?.message
      }
    })
  }
}

export const searchProduct = (valueToSearch = '') => (dispatch) => {
  dispatch({
    type: types.SEARCH_PRODUCT,
    payload: { valueToSearch }
  })
}
