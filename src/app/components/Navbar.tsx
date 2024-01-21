import { Grid, Typography, Button } from '@mui/material';
import styles from '../styles/Navbar.module.css';
export default function Navbar() {
    return (
    <div className={styles.nav}>
        <Grid container spacing={2} alignItems="center">
                <Grid item xs={1}>
                    <Typography variant="h6">Home</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="h6">Link 2</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="h6">Social</Typography>
                </Grid>
                <Grid item xs={1} container justifyContent="flex-end">
                    <Typography variant="h6">Portofolio</Typography>
                </Grid>
                <Grid item xs={4} container justifyContent="center">
                    <Typography variant="h4">FolioNomics</Typography>
                </Grid>
                <Grid item xs={4} container justifyContent="flex-end">
                    <Button variant="contained" className={styles.btn}>Log in to start</Button>
                </Grid>
            </Grid>
    </div>
       
    );
}