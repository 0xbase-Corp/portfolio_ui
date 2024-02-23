
'use client'

import React, { useEffect, useState } from 'react'

import ResponsiveDrawer from '@/components/drawer/Drawer'
import callApi from '@/utils/callApi'; 

export default function Dashboard() {
  const [healthStatus, setHealthStatus] = useState('')

  useEffect(() => {
    callApi('/healthy', 'GET')
      .then(data => {
        const message = data.message; 
        setHealthStatus(message);
      })
  }, []);

  return (
    <main>
      <ResponsiveDrawer drawerContent={healthStatus} />
    </main>
  )
}