'use client'

import React, { useEffect, useState } from 'react'

import CardComponent from '@/components/card/Card'
import ResponsiveDrawer from '@/components/drawer/Drawer'
import CustomTable from '@/components/table/Table'
import callApi from '@/utils/callApi'

export default function Dashboard() {
  const [healthStatus, setHealthStatus] = useState('')
  const [btcWalletData, setBtcWalletData] = useState({})
  const [solanaWalletData, setSolanaWalletData] = useState({})

  useEffect(() => {
    callApi('/healthy', 'GET').then((data) => {
      const message = data.message
      setHealthStatus(message)
    })

    const btcAddress = '37jKPSmbEGwgfacCr2nayn1wTaqMAbA94Z'
    callApi(`/api/v1/portfolio/btc/${btcAddress}`, 'GET').then((data) => {
      setBtcWalletData(data)
    })
  }, [])

  return (
    <main>
      <ResponsiveDrawer drawerContent={healthStatus} />
      <CardComponent>
        <p>Account Balance</p>
        <h1>$2,77,308.00</h1>
        <h2>-$1200.78(-1.89%) 24H</h2>
      </CardComponent>
      <CustomTable data={btcWalletData} />
    </main>
  )
}
