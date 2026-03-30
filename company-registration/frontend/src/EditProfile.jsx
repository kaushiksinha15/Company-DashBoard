import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';

const EditProfile = ({ user, updateProfile }) => {
    // Pre-fill form with current user data
    const [formData, setFormData] = useState({
        name: user.name,
        phone: user.phone,
        industry: user.industry
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(formData);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>Edit Company Profile</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth label="Company Name" name="name"
                        value={formData.name} margin="normal" onChange={handleChange}
                    />
                    <TextField
                        fullWidth label="Phone" name="phone"
                        value={formData.phone} margin="normal" onChange={handleChange}
                    />
                    <TextField
                        fullWidth label="Industry" name="industry"
                        value={formData.industry} margin="normal" onChange={handleChange}
                    />

                    <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
                        Save Changes
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default EditProfile;