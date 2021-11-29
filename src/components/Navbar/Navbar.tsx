import { FC } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import Typography from '@mui/material/Typography';
import SearchField from './SearchField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import "./navbar.scss";

const Navbar: FC = () => {
    return (
        <Box className="navbar">
            <Grid container columns={21} alignItems="center" >
                <Grid item xs={1}>
                    <ChangeHistoryIcon color="primary" />
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h6" component="div">
                        Aditya
                    </Typography>
                </Grid>
                <Grid item xs={11} >
                    <SearchField />
                </Grid>
                <Grid item xs={3} >
                    <Button variant="contained"  size="small" startIcon={<AddIcon />} sx={{ borderRadius: "8px" }}>
                        New Project
                    </Button>
                </Grid>
                <Grid item xs={4}>
                <Badge color="error" variant="dot" invisible={false} overlap="circular">
                    <NotificationsIcon color="disabled" fontSize="large" />
                    </Badge>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Navbar;
