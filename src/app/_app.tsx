import type { AppProps } from 'next/app'

require('dotenv').config({ path: ['.env.local', '.env'] })

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}
