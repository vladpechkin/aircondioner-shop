import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Подбор, продажа, установка и обслуживание различных видов кондиционеров для поддержки комфортного климата в любых помещениях Крыма" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}