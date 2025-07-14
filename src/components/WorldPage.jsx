import React from 'react';
import {
    Box,
    Typography,
    Paper
} from '@mui/material';
import {
    Language as LanguageIcon
} from '@mui/icons-material';

const WorldPage = () => {
    return (
        <Box sx={{ color: '#fff' }}>
            {/* Page Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <LanguageIcon sx={{ fontSize: 40, color: '#fff', mr: 2 }} />
                <Typography
                    variant="h3"
                    sx={{
                        color: '#fff',
                        fontWeight: 700,
                    }}
                >
                    World
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
                <LanguageIcon sx={{ fontSize: 80, color: '#666', mb: 3 }} />
                <Typography
                    variant="h4"
                    sx={{
                        color: '#ccc',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    Dünya Müzikleri
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#888',
                        maxWidth: '500px',
                        lineHeight: 1.6,
                    }}
                >
                    Dünyanın her yerinden müzikler burada yer alacak.
                    Farklı kültürlerden eserler çok yakında!
                </Typography>
            </Paper>
        </Box>
    );
};

export default WorldPage;