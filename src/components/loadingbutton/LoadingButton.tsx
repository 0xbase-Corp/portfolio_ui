import MuiButton from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import React, { FC, useState } from 'react'

interface ButtonProps {
  title: string
  onClick: () => Promise<void>
}

const Button: FC<ButtonProps> = ({ title, onClick }) => {
  const [loading, setLoading] = useState(false)

  return (
    <MuiButton
      onClick={() => {
        setLoading(true)
        onClick().finally(() => setLoading(false))
      }}
      disabled={loading}
      variant="contained"
      color="primary"
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : title}
    </MuiButton>
  )
}

export default Button
