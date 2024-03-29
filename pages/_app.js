import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { appWithTranslation } from '../i18n'

const theme = {
  colors: {
    primary: '#5046AF',
    secondary: '#1E5A90',
    weak: '#B0B0FF',
    featured: '#FE20C2',
    white: '#fff',
    black: '#000'
  }
}

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default appWithTranslation(MyApp)
