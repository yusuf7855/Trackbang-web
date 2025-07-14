import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import FreePage from './components/FreePage';

// Dark theme configuration
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#1a1a1a',
        },
        background: {
            default: '#000',
            paper: '#1a1a1a',
        },
        text: {
            primary: '#fff',
            secondary: '#ccc',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1536,
            xxl: 1750, // Custom breakpoint for ultra-wide screens
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#000',
                    color: '#fff',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#1a1a1a',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#404040',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#555',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 'bold',
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Router future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true
            }}>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<FreePage />} />
                        <Route
                            path="/register"
                            element={
                                <div style={{
                                    minHeight: '100vh',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    backgroundColor: '#000'
                                }}>
                                    Register Page - Coming Soon
                                </div>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <div style={{
                                    minHeight: '100vh',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    backgroundColor: '#000'
                                }}>
                                    Login Page - Coming Soon
                                </div>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;