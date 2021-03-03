import React from 'react'
import styles from 'styles/components/header.module.sass'

export const Header = () => {
  return (
    <div className={styles.headerLayout}>
      <div className="container">
        <header className={styles.headerWrapper}>
          <img src="/media/Logo_ML@2x.png" alt="Logo mercadolibre" />
          <div className={styles.inputWrapper}>
            <input type="text" placeholder="Nunca dejes de buscar" />
            <div className={`not-selectable ${styles.iconWrapper}`}>
              <img src="/media/ic_Search@2x.png" />
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
