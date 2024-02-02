import React, { FC, useState } from 'react';
import MuiButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

interface ButtonProps {
  title: string;
  onClick: () => Promise<void>; // Assuming your button click triggers an asynchronous operation
}

const Button: FC<ButtonProps> = ({ title, onClick }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    console.log('Button clicked');

    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <MuiButton
      onClick={handleClick}
      disabled={loading}
      variant="contained"
      color="primary"
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : title}
    </MuiButton>
  );
};

export default Button;
