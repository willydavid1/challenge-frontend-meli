import { config } from 'config'
import { apiResquest, getDecimalsAndAmount } from 'tools'

export default async (req, res) => {
  const { query } = req
  if (!('id' in query)) {
    res.status(400).json({
      error: 'you have to send an id as a variable something like this {{DOMAIN}}/api/items/:your-id-product-here:'
    })
    return
  }
  try {
    const requestProduct = apiResquest(`${config.BASE_URL}/items/${query?.id}`)
    const requestsProductDescription = apiResquest(`${config.BASE_URL}/items/${query?.id}/description`)
    const [{ data: dataProduct }, { data: dataDescription }] = await Promise.all([requestProduct, requestsProductDescription])
    const { data: categories } = await apiResquest(`${config.BASE_URL}/sites/MLA/search?category=${dataProduct?.category_id}`)

    const payloadResponse = {
      author: {
        name: 'Willy David',
        lastname: 'Da Conceicao Lozada'
      },
      breadcrumb: categories.filters?.[0]?.values?.find((category) => category?.id === dataProduct?.category_id)?.path_from_root,
      item: {
        id: dataProduct?.id,
        title: dataProduct?.title,
        price: {
          currency: dataProduct?.currency_id,
          ...getDecimalsAndAmount(dataProduct?.price)
        },
        picture: dataProduct?.thumbnail,
        condition: dataProduct?.condition,
        free_shipping: dataProduct?.shipping?.free_shipping,
        sold_quantity: dataProduct?.sold_quantity,
        description: dataDescription?.plain_text
      }
    }

    res.status(200).json(payloadResponse)
  } catch (error) {
    res.status(404).json({ error: `${error?.message} =(` })
  }
}
