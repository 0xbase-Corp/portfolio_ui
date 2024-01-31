import { FC } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Modal from '@/components/modal/modal';
import CustomDivider from '@/components/divider/CustomDivider';

interface LoginProps {
    onSignupClick: () => void;
    onConnectWalletClick: () => void;
}

const LoginDialog: FC<LoginProps> = ( ) => {

    return (
        <Modal title="Login" openModalButton='Login'>

            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Password" type="password" margin="normal" />
            
            <Typography sx={{ textAlign: 'right', mb: 2 }}>
                Don&rsquo;t have an account? <Typography component="a" href='#' >Signup</Typography>
            </Typography>

            <Button variant="contained" color="success" fullWidth
            sx={{ mb: 2}}
            >
                Login
            </Button>

            <CustomDivider title="OR"  />

            
            <Button variant="outlined" color="primary" fullWidth >
                Connect Wallet
            </Button>
        </Modal>
    );
};

export default LoginDialog;
