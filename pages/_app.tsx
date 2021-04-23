import '../styles/globals.css'

import { AppProps } from 'next/app'
import { StateProvider } from '../context/StateProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider >
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default MyApp
