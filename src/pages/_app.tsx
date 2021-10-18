import type { AppProps } from 'next/app'
import { Fragment } from 'react'

import Topbar from '../components/layouts/Topbar'

import '../plugins/i18n'
import { StateProvider } from '../store/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Topbar />
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </Fragment>
  )
}

export default MyApp
