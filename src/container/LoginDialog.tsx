import { FC, useState } from 'react'; // Import useState
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Modal from '@/components/modal/modal';
import Divider from '@/components/divider/Divider';
import SignupDialog from './SignupDialog';


const LoginDialog: FC = ( ) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const handleLogin = () => {
        setIsLoggedIn(true)
    }


    return (
        <Modal title="Login" openModalButton='Login'>

            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Password" type="password" margin="normal" />
            
            <Typography sx={{ textAlign: 'right', mb: 2 }}>
                Don&rsquo;t have an account? 
                <Typography component="span" style={{ cursor: 'pointer', color: 'blue' }} ><SignupDialog onClick={handleLogin} /> </Typography>
            </Typography>

            <Button variant="contained" color="success" fullWidth sx={{ mb: 2}}>
                Login
            </Button>

            <Divider title="OR"  />

            <Button variant="outlined" color="primary" fullWidth >
                Connect Wallet
            </Button>

        </Modal>
    );
};

export default LoginDialog;