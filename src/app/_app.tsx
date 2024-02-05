import { PrivyProvider } from '@privy-io/react-auth'

import type { AppProps } from 'next/app'

require('dotenv').config({ path: ['.env.local', '.env'] })

const handleLogin = (user: any) => {
  console.log(`User ${user.id} logged in!`)
}
export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      onSuccess={handleLogin}
      config={{
        loginMethods: ['email', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'https://your-logo-url',
        },
      }}
    >
      <Component {...pageProps} />
    </PrivyProvider>
  )
}
