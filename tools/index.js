import axios from 'axios'

export const apiResquest = (url = null, options = {}) => {
  return axios({
    method: options?.method?.toUpperCase(),
    url,
    data: options?.data ?? null,
    ...(options?.extra || {})
  })
}

export const getDecimalsAndAmount = (number) => {
  const numberSplited = number?.toString()?.split('.')
  return {
    amount: parseInt(numberSplited?.[0]),
    decimals: parseInt(numberSplited?.[1]) || null
  }
}

export const getValueThatIsRepeatedMost = (values = []) => {
  const valueThatIsRepeatedTheMost = values
    .reduce((accum, item) => {
      return {
        ...accum,
        [item]: {
          item,
          timesThatsRepeated: accum?.[item]?.timesThatsRepeated ? accum?.[item]?.timesThatsRepeated + 1 : 1
        }
      }
    }, {})
  return Object.entries(valueThatIsRepeatedTheMost).reduce((prev, item) => (item?.[1]?.timesThatsRepeated >= prev?.[1]?.timesThatsRepeated ? item : prev))?.[0]
}

export const generatePayloadForItems = (categories = [], breadcrumb = [], items = []) => {
  return {
    author: {
      name: 'Willy David',
      lastname: 'Da Conceicao Lozada'
    },
    categories,
    breadcrumb,
    items: items?.map((item) => ({
      id: item?.id,
      title: item?.title,
      price: {
        currency: item?.currency_id,
        ...getDecimalsAndAmount(item?.price)
      },
      picture: item?.thumbnail,
      condition: item?.condition,
      free_shipping: item?.shipping?.free_shipping,
      location: item?.address
    }))
  }
}

export const formatNumber = (number = '', separator = '') => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}
