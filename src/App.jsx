import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import FreePage from './components/FreePage';
import LoginPage from './components/LoginPage';
import Homepage from "./components/Homepage.jsx";

// Global styles using MUI's GlobalStyles
const globalStyles = (
    <GlobalStyles
        styles={(theme) => ({
            '*': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
            },
            'html, body': {
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
                overflowX: 'hidden',
                backgroundColor: '#000',
                color: '#fff',
            },
            '#root': {
                width: '100%',
                minHeight: '100vh',
                margin: 0,
                padding: 0,
                backgroundColor: '#000',
                display: 'flex',
                flexDirection: 'column',
            },
            '.App': {
                width: '100%',
                minHeight: '100vh',
                margin: 0,
                padding: 0,
                backgroundColor: '#000',
                display: 'flex',
                flexDirection: 'column',
            },
        })}
    />
);

// Custom theme with responsive breakpoints
const theme = createTheme({
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
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 600,
        },
        h3: {
            fontWeight: 600,
        },
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                },
                'html, body': {
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000',
                    color: '#fff',
                    overflowX: 'hidden',
                },
                '#root': {
                    width: '100%',
                    minHeight: '100vh',
                    backgroundColor: '#000',
                },
                '::-webkit-scrollbar': {
                    width: '8px',
                },
                '::-webkit-scrollbar-track': {
                    background: '#1a1a1a',
                },
                '::-webkit-scrollbar-thumb': {
                    background: '#404040',
                    borderRadius: '4px',
                },
                '::-webkit-scrollbar-thumb:hover': {
                    background: '#555',
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    width: '100%',
                    maxWidth: '100% !important',
                    paddingLeft: 0,
                    paddingRight: 0,
                    marginLeft: 0,
                    marginRight: 0,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 'bold',
                    borderRadius: '30px',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    borderBottom: '1px solid #333',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    paddingLeft: '0 !important',
                    paddingRight: '0 !important',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {globalStyles}
            <Router future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true
            }}>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<FreePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/homepage" element={<Homepage />} />
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
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;