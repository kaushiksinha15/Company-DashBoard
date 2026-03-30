import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, logout }) => {
    const navigate = useNavigate();

    return (
        <AppBar
            position="static"
            elevation={0} // Remove default shadow
            sx={{
                background: 'transparent', // Make navbar transparent
                paddingTop: 2
            }}
        >
            <Toolbar sx={{
                // Create a glass strip for the toolbar content
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                mx: 2, // Margin X (left/right)
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Typography
                    variant="h6"
                    sx={{
                        cursor: 'pointer',
                        color: '#fff',
                        fontWeight: 'bold',
                        textShadow: '0px 2px 4px rgba(0,0,0,0.2)'
                    }}
                    onClick={() => navigate('/')}
                >
                    CompanyPortal
                </Typography>

                <Box>
                    {user ? (
                        <>
                            <Button sx={{ color: '#fff' }} onClick={() => navigate('/dashboard')}>Dashboard</Button>
                            <Button sx={{ color: '#fff' }} onClick={() => navigate('/edit-profile')}>Profile</Button>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={logout}
                                sx={{ ml: 2, background: '#ff4b5c' }}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button sx={{ color: '#fff' }} onClick={() => navigate('/login')}>Login</Button>
                            <Button
                                variant="contained"
                                sx={{ ml: 2, background: '#fff', color: '#333', '&:hover': { background: '#f0f0f0' } }}
                                onClick={() => navigate('/register')}
                            >
                                Register
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;