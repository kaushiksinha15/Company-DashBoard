import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Poppins", "Roboto", "Arial", sans-serif', // Artistic font
        h4: { fontWeight: 700 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 500 },
    },
    palette: {
        primary: {
            main: '#ffffff', // White text for primary actions looks clean on glass
        },
        text: {
            primary: '#1d1d1d', // Dark text for readability
            secondary: '#424242',
        },
    },
    components: {
        // 1. The Glass Effect Card
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.45)', // Semi-transparent white
                    backdropFilter: 'blur(20px)',                // The "Frosted Glass" blur
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', // Soft shadow
                    borderRadius: '20px',                        // Very round corners
                    border: '1px solid rgba(255, 255, 255, 0.6)', // Subtle white border
                    color: '#333',
                },
            },
        },
        // 2. Artistic Buttons
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '50px', // Pill-shaped buttons
                    textTransform: 'none',
                    fontWeight: 600,
                    padding: '10px 25px',
                },
                containedPrimary: {
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', // Gradient Button
                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                    color: 'white',
                },
            },
        },
        // 3. Transparent Inputs
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '12px',
                    },
                },
            },
        },
    },
});

export default theme;