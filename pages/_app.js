import Wrapper from '../components/Wrapper/Wrapper'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </SessionProvider>
  )
}

export default MyApp
