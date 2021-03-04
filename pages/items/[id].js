import React from 'react'
import { Product } from 'components/product'
import styles from 'styles/pages/itemDetail.module.sass'

const ItemDetail = () => {
  return (
    <div>
      <div className={styles.breadcrumbWrapper}>
        BreadCrumb
      </div>
      <Product
        productDetail
      />
    </div>
  )
}

export default ItemDetail
