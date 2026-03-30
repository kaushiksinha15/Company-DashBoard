import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData.email, formData.password);
    };

    return (
        <Container maxWidth="xs" sx={{ mt: 8 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" align="center" gutterBottom>Login</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="Email" name="email" margin="normal" onChange={handleChange} required />
                    <TextField fullWidth label="Password" name="password" type="password" margin="normal" onChange={handleChange} required />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>Login</Button>
                </form>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Button onClick={() => navigate('/register')}>Don't have an account? Register</Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;