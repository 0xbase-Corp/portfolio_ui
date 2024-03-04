'use client'

import React, { useEffect, useState } from 'react'

import ResponsiveDrawer from '@/components/drawer/Drawer'
import callApi from '@/utils/callApi'
import CardComponent from '@/components/card/Card'

export default function Dashboard() {
  const [healthStatus, setHealthStatus] = useState('')
  const [btcWalletData, setBtcWalletData] = useState([])
  const [solanaWalletData, setSolanaWalletData] = useState([]);

  useEffect(() => {
    callApi('/healthy', 'GET').then((data) => {
      const message = data.message
      setHealthStatus(message)
    })

    const btcAddress = '37jKPSmbEGwgfacCr2nayn1wTaqMAbA94Z';
    fetch(`http://localhost:5050/api/v1/portfolio/btc/${btcAddress}`)
      .then((response) => response.json())
      .then((data) => {
        setBtcWalletData(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching BTC wallet data:', error));
    // const solanaAddress = 'ANRN6jr3auEieFNMvTG8C4ZBYLnUmceuFdNZnWfiYgr';
    // fetch(`http://localhost:5050/api/v1/portfolio/solana/${solanaAddress}`, {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImVkMDU0NGVhLWVkOGQtNDYxZS1hYmFiLTg1Y2IxNGQwN2NhOSIsIm9yZ0lkIjoiMzY2NTQ4IiwidXNlcklkIjoiMzc2NzEwIiwidHlwZUlkIjoiMjQ0ZjhlZjAtZTU5Ni00ZWMyLWIxY2MtYTExZDc4MjU3ZTI5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDE0MTQ1MDEsImV4cCI6NDg1NzE3NDUwMX0.tWhn6mb3vSpPbgXB_SYA7BD4c5Z0_lJ_Jsb73Nag824'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setSolanaWalletData(data);
    // })
    // .catch(error => console.error('Error fetching Solana wallet data:', error));
  }, [])

  return (
    <main>
      <ResponsiveDrawer drawerContent={healthStatus} />
      <CardComponent>
        <p>Account Balance</p>
        <h1>$2,77,308.00</h1>
        <h2>-$1200.78(-1.89%) 24H</h2>
      </CardComponent>
    </main>
  )
}
