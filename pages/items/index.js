import React, { useEffect } from 'react'
import { ListProducts } from 'components/listProducts'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getProducts } from 'redux/actions/products'

const ListItems = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    if (!router.query?.search) return
    dispatch(getProducts(router.query?.search))
  }, [router])

  return (
    <ListProducts />
  )
}

export default ListItems
