import type { AppProps } from 'next/app'
import { Fragment } from 'react'

import Topbar from '../components/layouts/Topbar'

import '../plugins/i18n'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Topbar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
