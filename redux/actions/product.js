import { types } from 'redux/types'
import { apiResquest } from 'tools'

export const getProduct = (productId = '') => async (dispatch) => {
  dispatch({
    type: types.GET_PRODUCT
  })
  try {
    const { data: payload } = await apiResquest(`/api/items/${encodeURIComponent(productId)}`)
    dispatch({
      type: types.GET_PRODUCT_SUCCESS,
      payload
    })
  } catch (error) {
    dispatch({
      type: types.GET_PRODUCT_ERROR,
      payload: {
        message: error?.message
      }
    })
  }
}
