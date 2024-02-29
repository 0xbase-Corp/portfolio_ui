import CloseIcon from '@mui/icons-material/Close'
import { Modal as MaterialModal } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { FC, ReactNode, useState } from 'react'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 240,
  backgroundColor: 'background.default',
  boxShadow: 24,
  borderRadius: 8,
  p: 4,
  '@media (min-width:600px)': {
    width: 400,
  },
}

interface ModalProps {
  openModalButton: string
  title: string
  body?: string
  children?: ReactNode
}

const Modal: FC<ModalProps> = ({ title, body, openModalButton, children }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button onClick={handleOpen}>{openModalButton}</Button>
      <MaterialModal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: 'absolute',
              top: 12,
              right: 40,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center' }}>
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {body}
          </Typography>
          {children}
        </Box>
      </MaterialModal>
    </>
  )
}

export default Modal
