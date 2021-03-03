import React from 'react'
import styles from 'styles/components/product.module.sass'

export const Product = () => {
  return (
    <div className={styles.wrapper}>
      <figure className={styles.figure}>
        <img className={styles.img} src="https://cdn.pixabay.com/photo/2021/01/24/20/47/tabby-5946499_960_720.jpg" alt=""/>
        <div className={styles.detail}>
          <h5>Ver Detalles</h5>
        </div>
      </figure>
      <div>
        <div className={styles.priceWrapper}>
          <h2 className={styles.price}>$ 1.980</h2>
          <img className={styles.freeShipping} src="/media/ic_shipping@2x.png" alt="Free Shipping"/>
        </div>
        <div>
          <h4 className={styles.description}>
            Descripcion del producto super largo para testear como se ve en el viewport. texto texto texto texto texto texto texto texto texto texto texto texto
          </h4>
        </div>
      </div>
      <div>
        <h2 className={styles.location}>
          Ubicación
        </h2>
      </div>
    </div>
  )
}
