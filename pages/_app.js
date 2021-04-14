import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/header'
import { Auth0Provider } from '@auth0/auth0-react'

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      //auth import detail
      domain=""
      clientId=""
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <html className="h-screen">
        <Head>
          <title>Oğuzhan Kaymak</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
        <main className="mt-6 mb-20">
          <Component {...pageProps} />
        </main>
      </html>
    </Auth0Provider>
  )
}

export default MyApp
