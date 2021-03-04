import React from 'react'
import { ListProducts } from 'components/listProducts'

const ListItems = () => {
  return (
    <ListProducts />
  )
}

export async function getServerSideProps (ctx) {
  return {
    props: {}
  }
}

export default ListItems
