import React, { Fragment } from 'react'
import styles from 'styles/components/listProducts.module.sass'
import { Product } from 'components/product'
import { Loader } from 'components/loader'
import { useSelector } from 'react-redux'
import Breadcrumb from 'components/breadcrumb'

export const ListProducts = () => {
  const { data, isLoading, error } = useSelector((state) => state.products)
  return (
    <div className={styles.wrapper}>
      <div>
        <Breadcrumb
          elements={data ? data.breadcrumb.map((elem) => elem.name) : []}
        />
      </div>
      <div className={styles.productsWrapper}>
        {
          isLoading && (
            <div className={styles.loaderWrapper}>
              <Loader />
            </div>
          )
        }
        {
          error && (
            <div className={styles.errorWrapper}>
              <h1>
                Hubo un error =(
              </h1>
            </div>
          )
        }
        {
          data && data.items.map((product, i) => {
            return (
              <Fragment key={product?.id}>
                <Product
                  productData={product}
                />
                {
                  data.items.length - 1 !== i && (
                    <div className="separator mtb" />
                  )
                }
              </Fragment>
            )
          })
        }
      </div>
    </div>
  )
}
