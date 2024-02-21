'use client'

import React, { useEffect, useState } from 'react'

import ResponsiveDrawer from '@/components/drawer/Drawer'

export default function Dashboard() {
  const [healthStatus, setHealthStatus] = useState('')

  useEffect(() => {
    fetch('/healthy')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setHealthStatus(data)
      })
      .catch((error) => {
        console.error('There was an error fetching the health status:', error)
        setHealthStatus('Error fetching health status')
      })
  }, [])

  return (
    <main>
      <ResponsiveDrawer drawerContent={healthStatus} />
    </main>
  )
}
