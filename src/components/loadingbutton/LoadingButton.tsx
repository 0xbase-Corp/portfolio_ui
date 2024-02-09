import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import React, { FC } from 'react'

interface ButtonProps {
  title: string
  onClick: () => void
  loading: boolean
  type?: 'button' | 'submit' | 'reset'
}

const LoadingButton: FC<ButtonProps> = ({ title, onClick, loading, type }) => {
  return (
    <Button onClick={onClick} disabled={loading} variant="contained" color="primary" type={type}>
      {loading ? <CircularProgress size={24} color="inherit" /> : title}
    </Button>
  )
}

export default LoadingButton
