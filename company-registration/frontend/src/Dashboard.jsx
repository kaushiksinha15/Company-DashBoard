import React from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={8}>
                        <Typography variant="h4" gutterBottom>Welcome, {user.name}!</Typography>
                        <Typography variant="subtitle1" color="textSecondary">Industry: {user.industry}</Typography>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'right' }}>
                        <Button variant="outlined" onClick={() => navigate('/edit-profile')}>Edit Profile</Button>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={{ mt: 4 }}>
                    <Grid item xs={12}>
                        <Typography variant="h6">Contact Details</Typography>
                        <Typography><strong>Email:</strong> {user.email}</Typography>
                        <Typography><strong>Phone:</strong> {user.phone}</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h6">Application Status</Typography>
                        <Button variant="contained" color="success" sx={{ mt: 1 }}>
                            Active
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Dashboard;