import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import React, { FC } from 'react'

interface ButtonProps {
  title: string
  onClick: () => Promise<void>
  setLoading: (loading: boolean) => void
  loading: boolean // Add loading prop
}

const LoadingButton: FC<ButtonProps> = ({ title, onClick, setLoading, loading }) => {
  return (
    <Button
      onClick={() => {
        setLoading(true)
        onClick().finally(() => setLoading(false))
      }}
      disabled={loading}
      variant="contained"
      color="primary"
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : title}
    </Button>
  )
}

export default LoadingButton
