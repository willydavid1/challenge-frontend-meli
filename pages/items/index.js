import React from 'react'
import { Header } from 'components/header'
import { ListProducts } from 'components/listProducts'

const ListItems = () => {
  return (
    <div>
      <Header />
      <ListProducts />
    </div>
  )
}

export async function getStaticProps (ctx) {
  return {
    props: {}
  }
}

export default ListItems
