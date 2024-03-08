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
    callApi('/healthy', 'GET').then((data) => {
      const message = data.message
      setHealthStatus(message)
    })

    const btcAddress = '37jKPSmbEGwgfacCr2nayn1wTaqMAbA94Z'
    callApi(`/api/v1/portfolio/btc/${btcAddress}`, 'GET').then((data) => {
      setBtcWalletData(data)
    })

    const solanaAddress = 'ANRN6jr3auEieFNMvTG8C4ZBYLnUmceuFdNZnWfiYgr'
    callApi(`/api/v1/portfolio/solana/${solanaAddress}`, 'GET', null, {
      headers: {
        Accept: 'application/json',
        'x-api-key':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImVkMDU0NGVhLWVkOGQtNDYxZS1hYmFiLTg1Y2IxNGQwN2NhOSIsIm9yZ0lkIjoiMzY2NTQ4IiwidXNlcklkIjoiMzc2NzEwIiwidHlwZUlkIjoiMjQ0ZjhlZjAtZTU5Ni00ZWMyLWIxY2MtYTExZDc4MjU3ZTI5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDE0MTQ1MDEsImV4cCI6NDg1NzE3NDUwMX0.tWhn6mb3vSpPbgXB_SYA7BD4c5Z0_lJ_Jsb73Nag824',
      },
    }).then((data) => {
      setSolanaWalletData(data)
    })

    const debankAddress = '0x5124fcC2B3F99F571AD67D075643C743F38f1C34'
    callApi(`/api/v1/portfolio/debank/${debankAddress}`, 'GET', null, {
      headers: {
        Accept: 'application/json',
        'AccessKey':
          '66797109ad02eb4c2a1c8dcc6014547bfac88402',
      },
    }).then((data) => {
      setDebank(data)
      console.log(data)
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
      <CustomTable data={[btcWalletData, solanaWalletData, debank]} />
    </main>
  )
}
