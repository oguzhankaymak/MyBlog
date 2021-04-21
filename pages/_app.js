import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/header/header'
import { Auth0Provider } from '@auth0/auth0-react'

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      //auth import detail
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN_ID}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <Head>
        <title>Oğuzhan Kaymak</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="mt-6 mb-20">
        <Component {...pageProps} />
      </main>
    </Auth0Provider>
  )
}

export default MyApp
