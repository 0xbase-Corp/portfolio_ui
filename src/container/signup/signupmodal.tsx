import { FC, ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Modal as MaterialModal, TextField } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 240,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 8,
    p: 4,
    '@media (min-width:600px)': {
        width: 400,  
    },
};

interface SignupModalProps {
    openSignupButton: string;
}

const SignupModal: FC<SignupModalProps> = ({ openSignupButton }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen}>{openSignupButton}</Button>
            <MaterialModal
                open={open}
                aria-labelledby="signup-modal-title"
                aria-describedby="signup-modal-description"
            >
                <Box sx={style}>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        sx={{
                            position: 'absolute',
                            top: 28,
                            right: 40,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
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
                        Have an account? <a href="#">Log In</a>
                    </Typography>
                </Box>
            </MaterialModal>
        </>
    );
};

export default SignupModal;
