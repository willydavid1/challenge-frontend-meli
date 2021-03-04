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
