import { AppProps } from 'next/app'
import Reset from '../styles/reset'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Reset />
      <Component {...pageProps} />
    </>
  )
}

export default App
