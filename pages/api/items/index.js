import { config } from 'config'
import { apiResquest, getValueThatIsRepeatedMost, generatePayloadForItems } from 'tools'

export default async (req, res) => {
  const { query } = req
  if (!('q' in query)) {
    res.status(400).json({
      error: 'You have to send a query params like this {{DOMAIN}}/api/items?q=:your-query-here:'
    })
    return
  }
  try {
    const { data } = await apiResquest(`${config.BASE_URL}sites/MLA/search?q=${encodeURIComponent(query?.q)}`)
    if (data?.results <= 0) {
      return res.status(200).json(generatePayloadForItems())
    }
    const productsToResponse = data.results?.slice(0, 4)
    const categoryThatIsRepeatedTheMost = getValueThatIsRepeatedMost(productsToResponse?.map((product) => product?.category_id))
    const { data: categories } = await apiResquest(`${config.BASE_URL}/sites/MLA/search?category=${categoryThatIsRepeatedTheMost}`)

    const payloadResponse = generatePayloadForItems(
      productsToResponse?.map((product) => product?.category_id),
      categories.filters?.[0]?.values?.find((category) => category?.id === categoryThatIsRepeatedTheMost)?.path_from_root,
      productsToResponse
    )
    res.status(200).json(payloadResponse)
  } catch (error) {
    res.status(404).json({ error: `${error?.message} =(` })
  }
}
