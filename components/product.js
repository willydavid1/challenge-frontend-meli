import React from 'react'
import styles from 'styles/components/product.module.sass'
import { formatNumber } from 'tools'
import Link from 'next/link'

export const Product = ({ productDetail, productData = {} }) => {
  if (productDetail) {
    return (
      <div className={`${styles.wrapper} ${styles.productDetail}`}>
        <figure className={styles.figure}>
          <img className={styles.img} src={productData?.picture} alt=""/>
        </figure>
        <div>
          <div className={styles.soldOutWrapper}>
            <h5>
              {productData?.condition} - {productData?.sold_quantity} vendidos
            </h5>
          </div>
          <div>
            <h4 className={styles.description}>
              {
                productData?.title
              }
            </h4>
          </div>
          <div className={styles.priceWrapper}>
            <h2 className={styles.price}>$ {`${formatNumber(productData.price.amount, '.')}`} <span className={styles.decimals}>{productData.price.decimals ?? '00'}</span> </h2>
          </div>
          <div>
            <button className={styles.buyButton}>
              Comprar
            </button>
          </div>
        </div>
        <div className={styles.descriptionWrapper}>
          <h2 className={styles.descriptionTitle}>
            Descripcion del producto
          </h2>
          <p>
            {
              productData?.description
            }
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.wrapper} ${productDetail ? styles.productDetail : ''}`}>
      <figure className={styles.figure}>
        <img className={styles.img} src={productData?.picture} alt=""/>
        <Link href={`/items/${encodeURIComponent(productData?.id ?? 5)}`}>
          <a className={`${styles.detail} not-selectable`}>Ver Detalles</a>
        </Link>
      </figure>
      <div>
        <div className={styles.priceWrapper}>
          <h2 className={styles.price}>$ {`${formatNumber(productData.price.amount, '.')}`}</h2>
          {
            productData?.free_shipping && (
              <img className={styles.freeShipping} src="/media/ic_shipping@2x.png" alt="Free Shipping"/>
            )
          }
        </div>
        <div>
          <h4 className={styles.description}>
            {
              productData?.title
            }
          </h4>
        </div>
      </div>
      <div>
        <h2 className={styles.location}>
          {
            productData?.location?.state_name
          }
        </h2>
      </div>
    </div>
  )
}
