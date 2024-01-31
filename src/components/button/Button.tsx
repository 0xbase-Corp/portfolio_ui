import { FC } from 'react';

import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
    title: string

}

const Button: FC<ButtonProps> = ({ title }) => {
    return (
        <MuiButton>{title}</MuiButton>
    )
}


export default Button
