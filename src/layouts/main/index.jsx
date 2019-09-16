import React from 'react'
import Head from 'next/head'

import { Header, Footer } from '@components'

const Index = ({ children }) => (
  <>
    <Head>
      <title>Home</title>
      <link
        href='https://fonts.googleapis.com/css?family=Nunito&display=swap'
        rel='stylesheet'
      />
    </Head>
    <style jsx global>{`
      body {
        font-family: 'Nunito', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `}</style>
    <Header />
    {children}
    <Footer />
  </>
)

export default Index
