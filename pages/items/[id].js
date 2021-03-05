import React, { useEffect } from 'react'
import { Product } from 'components/product'
import styles from 'styles/pages/itemDetail.module.sass'
import Breadcrumb from 'components/breadcrumb'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from 'redux/actions/product'
import { useRouter } from 'next/router'
import { Loader } from 'components/loader'

const ItemDetail = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector((state) => state.product)
  useEffect(() => {
    if (!router.query?.id) return
    dispatch(getProduct(router.query?.id))
  }, [router])

  return (
    <div>
      <div className={styles.breadcrumbWrapper}>
        <Breadcrumb
          elements={data ? data.breadcrumb.map((elem) => elem.name) : []}
        />
      </div>
      {
        error && (
          <div className={styles.errorWrapper}>
            <h2>Error =(</h2>
          </div>
        )
      }
      {
        isLoading
          ? (
            <div className={styles.loaderWrapper}>
              <Loader />
            </div>
            )
          : (
            <Product
              productDetail
              productData={(data && data.item) ?? {}}
            />
            )
      }

    </div>
  )
}

export default ItemDetail
