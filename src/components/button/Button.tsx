import { Button as MuiButton } from '@mui/material'
import { FC } from 'react'

interface ButtonProps {
  title: string
}

const Button: FC<ButtonProps> = ({ title }) => {
  return <MuiButton>{title}</MuiButton>
}

export default Button
