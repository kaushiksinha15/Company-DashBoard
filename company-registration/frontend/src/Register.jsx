import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';

const Register = ({ register }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        industry: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>Register Company</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="Company Name" name="name" margin="normal" onChange={handleChange} required />
                    <TextField fullWidth label="Email" name="email" type="email" margin="normal" onChange={handleChange} required />
                    <TextField fullWidth label="Password" name="password" type="password" margin="normal" onChange={handleChange} required />
                    <TextField fullWidth label="Phone" name="phone" margin="normal" onChange={handleChange} />
                    <TextField fullWidth label="Industry" name="industry" margin="normal" onChange={handleChange} />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Register</Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Register;