'use client'

import { PrivyProvider } from '@privy-io/react-auth'
import { useRouter } from 'next/navigation'
import { FC, ReactNode } from 'react'

const PrivyProviderWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  return (
    <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''} onSuccess={() => router.push('/dashboard')}>
      {children}
    </PrivyProvider>
  )
}

export default PrivyProviderWrapper
