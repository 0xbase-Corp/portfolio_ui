'use client'

import { PrivyProvider } from '@privy-io/react-auth'
import { useRouter } from 'next/navigation'
import { FC, ReactNode } from 'react'

const PrivyProviderWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const handleSuccess = () => {
    router.push('/dashboard')
  }
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      onSuccess={handleSuccess}
      config={{
        loginMethods: ['wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'https://unsplash.com/photos/two-electronic-devices-sitting-next-to-each-other-VLZ6YOEIN-w',
        },
      }}
    >
      {children}
    </PrivyProvider>
  )
}

export default PrivyProviderWrapper
