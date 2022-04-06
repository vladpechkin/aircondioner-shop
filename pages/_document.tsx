import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Ваш мастер по подбору, установке и обслуживанию кондиционеров в Крыму" />
        <title>Добрый Мастер</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}