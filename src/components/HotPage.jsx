import React from 'react';
import {
    Box,
    Typography,
    Paper
} from '@mui/material';
import {
    Whatshot as WhatshotIcon
} from '@mui/icons-material';

const HotPage = () => {
    return (
        <Box sx={{ color: '#fff' }}>
            {/* Page Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <WhatshotIcon sx={{ fontSize: 40, color: '#ff6b35', mr: 2 }} />
                <Typography
                    variant="h3"
                    sx={{
                        color: '#fff',
                        fontWeight: 700,
                    }}
                >
                    Hot
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
                <WhatshotIcon sx={{ fontSize: 80, color: '#ff6b35', mb: 3 }} />
                <Typography
                    variant="h4"
                    sx={{
                        color: '#ccc',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    Sıcak Müzikler
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#888',
                        maxWidth: '500px',
                        lineHeight: 1.6,
                    }}
                >
                    Şu anda trend olan ve en çok dinlenen şarkılar burada!
                    En sıcak müzikler çok yakında gelecek!
                </Typography>
            </Paper>
        </Box>
    );
};

export default HotPage;