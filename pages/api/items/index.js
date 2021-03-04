import { config } from 'config'
import { apiResquest, getDecimalsAndAmount, getValueThatIsRepeatedMost } from 'tools'

export default async (req, res) => {
  const { query } = req
  if (!('q' in query)) {
    res.status(400).json({
      error: 'You have to send a query params like this {{DOMAIN}}/api/items?q=:your-query-here:'
    })
    return
  }
  try {
    const { data } = await apiResquest(`${config.BASE_URL}sites/MLA/search?q=${query?.q}`)
    const productsToResponse = data.results?.slice(0, 4)
    const categoryThatIsRepeatedTheMost = getValueThatIsRepeatedMost(productsToResponse?.map((product) => product?.category_id))
    const { data: categories } = await apiResquest(`${config.BASE_URL}/sites/MLA/search?category=${categoryThatIsRepeatedTheMost}`)

    const payloadResponse = {
      author: {
        name: 'Willy David',
        lastname: 'Da Conceicao Lozada'
      },
      categories: productsToResponse?.map((product) => product?.category_id),
      breadcrumb: categories.filters?.[0]?.values?.find((category) => category?.id === categoryThatIsRepeatedTheMost)?.path_from_root,
      items: productsToResponse?.map((item) => ({
        id: item?.id,
        title: item?.title,
        price: {
          currency: item?.currency_id,
          ...getDecimalsAndAmount(item?.price)
        },
        picture: item?.thumbnail,
        condition: item?.condition,
        free_shipping: item?.shipping?.free_shipping
      }))
    }

    res.status(200).json(payloadResponse)
  } catch (error) {
    res.status(404).json({ error: `${error?.message} =(` })
  }
}
