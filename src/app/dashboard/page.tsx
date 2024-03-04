'use client'

import React, { useEffect, useState } from 'react'

import ResponsiveDrawer from '@/components/drawer/Drawer'
import callApi from '@/utils/callApi'
import CardComponent from '@/components/card/Card'
import CustomTable from '@/components/table/Table'

export default function Dashboard() {
  const [healthStatus, setHealthStatus] = useState('')
  

  useEffect(() => {
    callApi('/healthy', 'GET').then((data) => {
      const message = data.message
      setHealthStatus(message)
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
      <CustomTable/>
    </main>
  )
}
