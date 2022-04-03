import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../style.css'

const App = ({ Component, pageProps }: AppProps) =>
  <Component {...pageProps} />

export default App
