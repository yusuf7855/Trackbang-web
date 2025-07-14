import React from 'react';
import {
    Box,
    Typography,
    Paper
} from '@mui/material';
import {
    TrendingUp as TrendingUpIcon
} from '@mui/icons-material';

const Top10Page = () => {
    return (
        <Box sx={{ color: '#fff' }}>
            {/* Page Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <TrendingUpIcon sx={{ fontSize: 40, color: '#fff', mr: 2 }} />
                <Typography
                    variant="h3"
                    sx={{
                        color: '#fff',
                        fontWeight: 700,
                    }}
                >
                    Top 10
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
                <TrendingUpIcon sx={{ fontSize: 80, color: '#666', mb: 3 }} />
                <Typography
                    variant="h4"
                    sx={{
                        color: '#ccc',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    Top 10 Şarkılar
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#888',
                        maxWidth: '500px',
                        lineHeight: 1.6,
                    }}
                >
                    En popüler 10 şarkı burada görüntülenecek.
                    Çok yakında içerik eklenecek!
                </Typography>
            </Paper>
        </Box>
    );
};

export default Top10Page;