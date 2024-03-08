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
  const [debank, setDebank] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const healthData = await callApi('/healthy', 'GET')
      setHealthStatus(healthData.message)

      const btcAddress = `${process.env.NEXT_PUBLIC_BTC_ADDRESS}`
      const btcData = await callApi(`/api/v1/portfolio/btc/${btcAddress}`, 'GET')
      setBtcWalletData(btcData)

      const solanaAddress = `${process.env.NEXT_PUBLIC_SOLANA_ADDRESS}`
      const solanaData = await callApi(`/api/v1/portfolio/solana/${solanaAddress}`, 'GET', null, {
        headers: {
          Accept: 'application/json',
          'x-api-key': `${process.env.NEXT_PUBLIC_SOLANA_API_KEY}`,
        },
      })
      setSolanaWalletData(solanaData)

      const debankAddress = `${process.env.NEXT_PUBLIC_DEBANK_ADDRESS}`
      const debankData = await callApi(`/api/v1/portfolio/debank/${debankAddress}`, 'GET', null, {
        headers: {
          Accept: 'application/json',
          AccessKey: `${process.env.NEXT_PUBLIC_DEBANK_ACCESS_KEY}`,
        },
      })
      setDebank(debankData)
      console.log(debankData)
    }

    fetchData()
  }, [])

  return (
    <main>
      <ResponsiveDrawer drawerContent={healthStatus} />
      <CardComponent>
        <p>Account Balance</p>
        <h1>$2,77,308.00</h1>
        <h2>-$1200.78(-1.89%) 24H</h2>
      </CardComponent>
      <CustomTable data={[btcWalletData, solanaWalletData, debank]} />
    </main>
  )
}
