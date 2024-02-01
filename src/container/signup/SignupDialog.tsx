import { FC } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Modal from '@/components/modal/modal';

interface SignupProps {
    onClick: () => void
}

const SignupDialog: FC<SignupProps> = ({ onClick }) => {

    return (
        <Modal title="Sign up with Email" openModalButton='Sign Up'>

            <TextField fullWidth label="Name" margin="normal" />
            <TextField fullWidth label="Email" margin="normal" />
            <TextField fullWidth label="Password" type="password" margin="normal" />
            <TextField fullWidth label="Confirm Password" type="password" margin="normal" />
            <Button variant="contained" color="success" onClick={onClick} fullWidth>
                Sign Up
            </Button>
            <Typography sx={{ mt: 2, textAlign: 'center' }}>
                Have an account? <Typography component="a" href='/dashboard'>Log In</Typography>
            </Typography>
        </Modal>
    );
};

export default SignupDialog;
