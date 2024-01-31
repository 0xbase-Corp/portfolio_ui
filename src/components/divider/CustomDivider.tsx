import { FC } from 'react';
import { Divider as MuiDivider } from '@mui/material';
import Typography from '@mui/material/Typography';

interface DividerProps {
    title: string;
}


const CustomDivider: FC<DividerProps> = ({ title }) => {
    return (
        <MuiDivider sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', mb: 2,  }}>
                 <Typography sx={{ margin: '0 8px' }}>{title}</Typography>
        </MuiDivider>

        
    );
};

export default CustomDivider;
