import React from 'react'
import styles from 'styles/components/product.module.sass'
import { useRouter } from 'next/router'

export const Product = ({ productDetail, productData = {} }) => {
  const router = useRouter()

  if (productDetail) {
    return (
      <div className={`${styles.wrapper} ${styles.productDetail}`}>
        <figure className={styles.figure}>
          <img className={styles.img} src="https://cdn.pixabay.com/photo/2021/01/24/20/47/tabby-5946499_960_720.jpg" alt=""/>
        </figure>
        <div>
          <div className={styles.soldOutWrapper}>
            <h5>
              Nuevo - 294 vendidos
            </h5>
          </div>
          <div>
            <h4 className={styles.description}>
              Descripcion del producto super largo para testear como se ve en el viewport. texto texto texto texto texto texto texto texto texto texto texto texto
            </h4>
          </div>
          <div className={styles.priceWrapper}>
            <h2 className={styles.price}>$ 1.980</h2>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum tincidunt nibh in lacinia. Nulla viverra mollis mi, in pellentesque odio laoreet ac. Curabitur sit amet dolor eu turpis feugiat pretium interdum et urna. Praesent metus ligula, tempor eget lacinia eu, lacinia eget massa. Quisque semper, erat non posuere pharetra, justo leo bibendum ipsum, eget egestas arcu diam id odio. Etiam iaculis magna in ex scelerisque, ut rutrum quam vestibulum. Quisque malesuada et magna ac aliquet. Sed aliquam vehicula facilisis. Vivamus vestibulum metus sed auctor porttitor.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.wrapper} ${productDetail ? styles.productDetail : ''}`}>
      <figure className={styles.figure}>
        <img className={styles.img} src="https://cdn.pixabay.com/photo/2021/01/24/20/47/tabby-5946499_960_720.jpg" alt=""/>
        <div className={`${styles.detail} not-selectable`} onClick={() => router.push(`/items/${productData?.id ?? 5}`)}>
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
