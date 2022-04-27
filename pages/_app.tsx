import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../style.css'

const App = ({ Component, pageProps }: AppProps) =>
  <>
    <Head>
      <title>Добрый Мастер - Кондиционеры в Крыму</title>
    </Head>
    <Component {...pageProps} />
  </>

export default App
