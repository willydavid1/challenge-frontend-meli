import React from 'react'
import styles from 'styles/components/header.module.sass'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from 'redux/actions/products'

export const Header = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { searchProduct: valueSearchInput } = useSelector((state) => state.products)

  const redirectUser = (URL = '/', queryParamsSearch = true) => {
    router.push({
      pathname: URL,
      query: queryParamsSearch ? { search: valueSearchInput ?? '' } : {}
    })
  }

  return (
    <div className={styles.headerLayout}>
      <div className="container">
        <header className={styles.headerWrapper}>
          <img src="/media/Logo_ML@2x.png" alt="Logo mercadolibre" onClick={() => redirectUser('/', false)} />
          <div className={styles.inputWrapper}>
            <input
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  redirectUser('/items')
                }
              }}
              type="text"
              placeholder="Nunca dejes de buscar"
              onChange={(e) => {
                dispatch(searchProduct(e.target.value))
              }}
              value={valueSearchInput}
            />
            <div className={`not-selectable ${styles.iconWrapper}`} onClick={() => redirectUser('/items')}>
              <img src="/media/ic_Search@2x.png" />
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
