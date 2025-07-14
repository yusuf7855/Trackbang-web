import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    AppBar,
    Toolbar,
    Button,
    Tab,
    Tabs,
    Paper
} from '@mui/material';
import {
    MusicNote as MusicNoteIcon,
    ExitToApp as LogoutIcon
} from '@mui/icons-material';
import Top10Page from './Top10Page.jsx';
import WorldPage from './WorldPage.jsx';
import HousePage from './HousePage.jsx';
import HotPage from './HotPage.jsx';

const Homepage = () => {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleLogout = () => {
        // Clear localStorage
        localStorage.clear();
        // Redirect to landing page
        navigate('/', { replace: true });
    };

    const renderTabContent = () => {
        switch (selectedTab) {
            case 0:
                return <Top10Page />;
            case 1:
                return <WorldPage />;
            case 2:
                return <HousePage />;
            case 3:
                return <HotPage />;
            default:
                return <Top10Page />;
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#000' }}>
            {/* Header */}
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    backgroundColor: '#000',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                        {/* Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 40,
                                    height: 40,
                                    backgroundColor: '#fff',
                                    borderRadius: '50%',
                                    mr: 2,
                                }}
                            >
                                <MusicNoteIcon sx={{ fontSize: 20, color: '#000' }} />
                            </Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#fff',
                                    fontWeight: 700,
                                }}
                            >
                                TrackBang
                            </Typography>
                        </Box>

                        {/* Logout Button */}
                        <Button
                            startIcon={<LogoutIcon />}
                            onClick={handleLogout}
                            sx={{
                                color: '#fff',
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                textTransform: 'none',
                                '&:hover': {
                                    borderColor: '#fff',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                            variant="outlined"
                        >
                            Çıkış Yap
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Navigation Tabs */}
            <Box sx={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <Container maxWidth="xl">
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        sx={{
                            '& .MuiTab-root': {
                                color: '#ccc',
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 600,
                                minWidth: 120,
                                py: 2,
                                '&.Mui-selected': {
                                    color: '#fff',
                                },
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#fff',
                                height: 3,
                            },
                        }}
                    >
                        <Tab label="Top 10" />
                        <Tab label="World" />
                        <Tab label="House" />
                        <Tab label="Hot" />
                    </Tabs>
                </Container>
            </Box>

            {/* Main Content */}
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Paper
                    elevation={0}
                    sx={{
                        backgroundColor: 'transparent',
                        minHeight: '70vh',
                    }}
                >
                    {renderTabContent()}
                </Paper>
            </Container>
        </Box>
    );
};

export default Homepage;