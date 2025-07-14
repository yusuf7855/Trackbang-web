import React from 'react';
import {
    Box,
    Typography,
    Paper
} from '@mui/material';
import {
    Home as HomeIcon
} from '@mui/icons-material';

const HousePage = () => {
    return (
        <Box sx={{ color: '#fff' }}>
            {/* Page Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <HomeIcon sx={{ fontSize: 40, color: '#fff', mr: 2 }} />
                <Typography
                    variant="h3"
                    sx={{
                        color: '#fff',
                        fontWeight: 700,
                    }}
                >
                    House
                </Typography>
            </Box>

            {/* Content Area */}
            <Paper
                elevation={0}
                sx={{
                    backgroundColor: 'rgba(26, 26, 26, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    p: 6,
                    textAlign: 'center',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <HomeIcon sx={{ fontSize: 80, color: '#666', mb: 3 }} />
                <Typography
                    variant="h4"
                    sx={{
                        color: '#ccc',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    House Müzik
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#888',
                        maxWidth: '500px',
                        lineHeight: 1.6,
                    }}
                >
                    En iyi house müzik parçaları burada yer alacak.
                    Dans pistlerinin favorileri çok yakında!
                </Typography>
            </Paper>
        </Box>
    );
};

export default HousePage;