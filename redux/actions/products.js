import { types } from 'redux/types'
import { BASE_URL, apiResquest } from 'redux/tools'

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: types.GET_PRODUCTS
  })
  try {
    const { data: payload } = await apiResquest(`${BASE_URL}utils/product.json`)
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

export const searchProduct = (valueToSearch) => (dispatch) => {
  dispatch({
    type: types.SEARCH_PRODUCT,
    payload: { valueToSearch }
  })
}
