import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import React, { FC } from 'react'

interface ButtonProps {
  title: string
  onClick: () => Promise<void>
  loading: boolean
}

const LoadingButton: FC<ButtonProps> = ({ title, onClick, loading }) => {
  return (
    <Button onClick={onClick} disabled={loading} variant="contained" color="primary">
      {loading ? <CircularProgress size={24} color="inherit" /> : title}
    </Button>
  )
}

export default LoadingButton
