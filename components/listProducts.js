import React from 'react'
import styles from 'styles/components/listProducts.module.sass'
import { Product } from 'components/product'

export const ListProducts = ({
  products = [1, 2, 3, 4, 5, 6]
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        BreadCrumb
      </div>
      <div className={styles.productsWrapper}>
        {
          products.map((product, i) => {
            return (
              <>
                <Product key={i} />
                {
                  products.length - 1 !== i && (
                    <div className="separator mtb" />
                  )
                }
              </>
            )
          })
        }
      </div>
    </div>
  )
}
