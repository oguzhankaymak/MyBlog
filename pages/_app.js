import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/header/header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Oğuzhan Kaymak</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="mt-6 mb-20">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
