import React from 'react'
import { Header } from 'components/header'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Buscador de Mercadolibre</title>
        <meta name="description" content="En esta app puedes buscar cualquier producto disponible en mercadolibre de forma rápida"/>
        <meta name="keywords" content="buscador de productos mercadolibre, buscador de productos, información mercadolibre"/>
      </Head>
      <Header />
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Layout
