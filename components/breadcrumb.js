import React, { Fragment } from 'react'
import Link from 'next/link'
import styles from 'styles/components/breadcrumb.module.sass'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { searchProduct } from 'redux/actions/products'

const Breadcrumb = ({ elements = [] }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.wrapper}>
      {
        elements.length > 0 && elements.map((elem, i) => {
          return (
            <Fragment key={`${elem}_${i}`}>
              <Link href={`/items?search=${encodeURIComponent(elem)}`}>
                <a className="link" onClick={() => dispatch(searchProduct(elem))}>{elem}</a>
              </Link>
              {
                elements.length - 1 !== i && (
                  <IoIosArrowForward />
                )
              }
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default Breadcrumb
