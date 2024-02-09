import { Button } from '@mui/material'
import { usePrivy } from '@privy-io/react-auth'
import { FC } from 'react'

const ConnectWallet: FC = () => {
  const { login } = usePrivy()

  return (
    <>
      <Button onClick={login} color="primary" variant="outlined">
        Connect Wallet
      </Button>
    </>
  )
}

export default ConnectWallet
