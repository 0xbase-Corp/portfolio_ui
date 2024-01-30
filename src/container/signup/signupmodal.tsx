import { FC, ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField }  from '@mui/material';
import Modal from '@/components/modal/modal';


const SignupModal: FC = ({}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Modal title="" body="" openModalButton='Sign Up'>
            
                <Box>
                    <Typography id="signup-modal-title" variant="h6" component="h2"
                    sx={{
                        textAlign: 'center',
                    }}>
                        Sign up with Email
                    </Typography>
                    <TextField fullWidth label="Name" margin="normal" />
                    <TextField fullWidth label="Email" margin="normal" />
                    <TextField fullWidth label="Password" type="password" margin="normal" />
                    <TextField fullWidth label="Confirm Password" type="password" margin="normal" />
                    <Button variant="contained" color="success" fullWidth>
                        Sign Up
                    </Button>
                    <Typography sx={{ mt: 2, textAlign: 'center'}}>
                        Have an account? <Typography component="a" href='/dashboard'>Log In</Typography>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default SignupModal;
