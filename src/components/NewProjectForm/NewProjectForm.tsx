import { FC } from 'react';
import Grid from '@mui/material/Grid';
import './NewProjectForm.scss';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const NewProjectForm: FC = () => {
    return (
        <Box component="form" className="projectform">
            <label className="projectlabel" htmlFor="fname">Add New Project</label><br />
            <Grid container>
                <Grid item xs={10} sm={5} md={3}>
                    <TextField placeholder="Project Name" className="input" size="small" variant="outlined" />
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between" alignItems="flex-end">
                <Grid item xs={10} sm={8} md={5}>
                    <TextField placeholder="Project Description" className="textarea" size="small" variant="outlined" multiline rows={3}/>
                </Grid>
                <Grid item xs={10} sm={2} md={2}>
                    <Button className="projectbutton" variant="text">Create</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NewProjectForm;
