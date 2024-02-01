import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { FC } from 'react' // Import useState

import Divider from '@/components/divider/Divider'
import Modal from '@/components/modal/modal'
import SignupDialog from './SignupDialog'

const LoginDialog: FC = () => {
  return (
    <Modal title="Login" openModalButton="Login">
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />

      <Typography sx={{ textAlign: 'right', mb: 2 }}>
        {/* &rsquo; is an appostrophe */}
        Don&rsquo;t have an account?
        <Typography component="span" style={{ cursor: 'pointer', color: 'blue' }}>
          {/* TODO */}
          <SignupDialog onClick={() => {}} />
        </Typography>
      </Typography>

      <Button variant="contained" color="success" fullWidth sx={{ mb: 2 }}>
        Login
      </Button>

      <Divider title="OR" />

      <Button variant="outlined" color="primary" fullWidth>
        Connect Wallet
      </Button>
    </Modal>
  )
}

export default LoginDialog
