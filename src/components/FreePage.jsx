import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    AppBar,
    Toolbar,
    Stack,
    Grid,
    Card,
    CardContent,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { keyframes } from '@mui/system';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PersonIcon from '@mui/icons-material/Person';

// Animation for music icon
const pulse = keyframes`
    0% {
        transform: scale(0.95);
        opacity: 0.8;
    }
    100% {
        transform: scale(1.15);
        opacity: 1;
    }
`;

const FreePage = () => {
    const [allLoaded, setAllLoaded] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

    const tracks = [
        { id: "4QHKR48C18rwlpSYW6rH7p", title: "Blinding Lights - The Weeknd" },
        { id: "3pPe4F2kFRp9ipARwxFmQr", title: "Shape of You - Ed Sheeran" },
        { id: "2MFs3zQcS0MuIjuyyG85fV", title: "Someone Like You - Adele" },
        { id: "0RMmME0OhJcrWtnb2kZMHL", title: "Watermelon Sugar - Harry Styles" },
        { id: "70sMnVjOXAbZCH5USpGuOG", title: "Bad Guy - Billie Eilish" },
        { id: "1BxfuPKGuaTgP7aM0Bbdwr", title: "Shallow - Lady Gaga & Bradley Cooper" },
        { id: "7qiZfU4dY1lWllzX7mPBI3", title: "Stay - The Kid LAROI & Justin Bieber" },
        { id: "11dFghVXANMlKmJXsNCbNl", title: "As It Was - Harry Styles" },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setAllLoaded(true);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    // Custom Container component with responsive padding
    const ResponsiveContainer = ({ children, ...props }) => (
        <Container
            maxWidth={false}
            sx={{
                width: '100%',
                maxWidth: {
                    xs: '100%',
                    sm: '100%',
                    md: '1200px',
                    lg: '1400px',
                    xl: '1600px',
                },
                px: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                    lg: 5,
                    xl: 6,
                },
                mx: 'auto',
                ...props.sx
            }}
            {...props}
        >
            {children}
        </Container>
    );

    const SpotifyEmbed = ({ trackId }) => {
        const spotifyUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&autoplay=0&hide_cover=0`;

        return (
            <Card
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    width: '100%',
                    mx: 'auto',
                }}
            >
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Box
                        component="iframe"
                        src={spotifyUrl}
                        sx={{
                            width: '100%',
                            height: 152,
                            border: 'none',
                            borderRadius: '12px',
                        }}
                        frameBorder="0"
                        allowtransparency="true"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </CardContent>
            </Card>
        );
    };

    const LoadingContent = () => (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
                py: 10,
                textAlign: 'center',
                width: '100%',
            }}
        >
            <ResponsiveContainer>
                <MusicNoteIcon
                    sx={{
                        fontSize: { xs: '4rem', sm: '5rem' },
                        color: '#fff',
                        animation: `${pulse} 1s ease-in-out infinite alternate`,
                    }}
                />
                <Typography
                    variant="h4"
                    sx={{
                        color: '#fff',
                        fontWeight: 600,
                        mt: 3,
                        fontSize: {
                            xs: '1.5rem',
                            sm: '2rem',
                            md: '2.5rem',
                            lg: '3rem'
                        }
                    }}
                >
                    Müzik Yükleniyor...
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#ccc',
                        mt: 2,
                        fontSize: {
                            xs: '0.9rem',
                            sm: '1rem',
                            md: '1.1rem',
                            lg: '1.25rem'
                        }
                    }}
                >
                    En sevdiğiniz şarkılar hazırlanıyor
                </Typography>
            </ResponsiveContainer>
        </Box>
    );

    const LoadedContent = () => (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
                    py: { xs: 8, sm: 10, md: 12 },
                    textAlign: 'center',
                    width: '100%',
                }}
            >
                <ResponsiveContainer>
                    <Typography
                        variant="h1"
                        sx={{
                            color: '#fff',
                            fontWeight: 700,
                            mb: 3,
                            fontSize: {
                                xs: '2rem',
                                sm: '2.5rem',
                                md: '3rem',
                                lg: '3.5rem',
                                xl: '4rem'
                            }
                        }}
                    >
                        Ücretsiz Müzik Deneyimi
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#ccc',
                            mb: 4,
                            mx: 'auto',
                            lineHeight: 1.6,
                            fontSize: {
                                xs: '1rem',
                                sm: '1.1rem',
                                md: '1.25rem',
                                lg: '1.4rem',
                                xl: '1.5rem'
                            },
                            maxWidth: {
                                xs: '100%',
                                sm: '500px',
                                md: '600px',
                                lg: '700px',
                                xl: '800px'
                            }
                        }}
                    >
                        En popüler şarkıları dinleyin ve premium deneyim için üye olun
                    </Typography>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mt: 4 }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleRegister}
                            sx={{
                                backgroundColor: '#fff',
                                color: '#000',
                                fontWeight: 'bold',
                                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                px: { xs: 3, sm: 4 },
                                py: { xs: 1.5, sm: 1.5 },
                                minWidth: { xs: '250px', sm: '200px' },
                                borderRadius: '30px',
                                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
                                '&:hover': {
                                    backgroundColor: '#f0f0f0',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4)',
                                },
                            }}
                        >
                            Hemen Kayıt Ol - 10€/ay
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={handleLogin}
                            sx={{
                                color: '#fff',
                                borderColor: '#fff',
                                fontWeight: 'bold',
                                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                px: { xs: 3, sm: 4 },
                                py: { xs: 1.5, sm: 1.5 },
                                minWidth: { xs: '250px', sm: '180px' },
                                borderRadius: '30px',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderColor: '#fff',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            Giriş Yap
                        </Button>
                    </Stack>
                </ResponsiveContainer>
            </Box>

            {/* Spotify Tracks Section */}
            <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, width: '100%' }}>
                <ResponsiveContainer>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#fff',
                            fontWeight: 600,
                            textAlign: 'center',
                            mb: 2,
                            fontSize: {
                                xs: '1.75rem',
                                sm: '2rem',
                                md: '2.25rem',
                                lg: '2.5rem',
                                xl: '3rem'
                            }
                        }}
                    >
                        Popüler Şarkılar
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#ccc',
                            textAlign: 'center',
                            mb: 5,
                            fontSize: {
                                xs: '0.9rem',
                                sm: '1rem',
                                md: '1.1rem',
                                lg: '1.2rem',
                                xl: '1.3rem'
                            }
                        }}
                    >
                        8 popüler şarkıyı ücretsiz dinleyin - Premium ile sınırsız müzik
                    </Typography>

                    <Box
                        sx={{
                            backgroundColor: '#0f0f0f',
                            borderRadius: '20px',
                            p: { xs: 3, sm: 4, md: 5 },
                            mt: 4,
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(135deg, rgba(30,30,30,0.8) 0%, rgba(15,15,15,0.9) 100%)',
                                borderRadius: '20px',
                                zIndex: 0,
                            },
                            '& > *': {
                                position: 'relative',
                                zIndex: 1,
                            }
                        }}
                    >
                        <Grid
                            container
                            spacing={{ xs: 1, sm: 1.5, md: 2 }}
                            justifyContent="center"
                        >
                            {tracks.map((track, index) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={6}
                                    lg={3}
                                    xl={3}
                                    key={track.id}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <SpotifyEmbed trackId={track.id} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </ResponsiveContainer>
            </Box>

            {/* CTA Section */}
            <Box
                sx={{
                    backgroundColor: '#1a1a1a',
                    py: { xs: 8, sm: 10 },
                    textAlign: 'center',
                    width: '100%',
                }}
            >
                <ResponsiveContainer>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#fff',
                            fontWeight: 600,
                            mb: 3,
                            fontSize: {
                                xs: '1.75rem',
                                sm: '2rem',
                                md: '2.25rem',
                                lg: '2.5rem',
                                xl: '3rem'
                            }
                        }}
                    >
                        Tüm İçeriklere Erişin
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#ccc',
                            mb: 4,
                            lineHeight: 1.6,
                            mx: 'auto',
                            fontSize: {
                                xs: '0.9rem',
                                sm: '1rem',
                                md: '1.1rem',
                                lg: '1.2rem',
                                xl: '1.3rem'
                            },
                            maxWidth: {
                                xs: '100%',
                                sm: '500px',
                                md: '700px',
                                lg: '800px',
                                xl: '900px'
                            }
                        }}
                    >
                        Sınırsız müzik, playlist oluşturma, offline dinleme ve daha fazlası için premium üyelik alın
                    </Typography>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button
                            variant="contained"
                            onClick={handleRegister}
                            sx={{
                                backgroundColor: '#fff',
                                color: '#000',
                                fontWeight: 'bold',
                                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                px: { xs: 3, sm: 4 },
                                py: { xs: 1.5, sm: 1.5 },
                                minWidth: { xs: '250px', sm: '220px' },
                                borderRadius: '30px',
                                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
                                '&:hover': {
                                    backgroundColor: '#f0f0f0',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4)',
                                },
                            }}
                        >
                            Premium Üyelik - 10€/ay
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={handleLogin}
                            sx={{
                                color: '#fff',
                                borderColor: '#fff',
                                fontWeight: 'bold',
                                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                px: { xs: 3, sm: 4 },
                                py: { xs: 1.5, sm: 1.5 },
                                minWidth: { xs: '250px', sm: '200px' },
                                borderRadius: '30px',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderColor: '#fff',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            Zaten Üye misiniz?
                        </Button>
                    </Stack>
                </ResponsiveContainer>
            </Box>
        </>
    );

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#000',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                overflow: 'hidden'
            }}
        >
            {/* Navigation */}
            <AppBar position="static" elevation={0}>
                <ResponsiveContainer>
                    <Toolbar
                        sx={{
                            justifyContent: 'space-between',
                            py: 1,
                            minHeight: { xs: '56px', sm: '64px', md: '70px' },
                            px: '0 !important',
                        }}
                    >
                        {/* Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' }
                                }}
                            >
                                TrackBang
                            </Typography>
                        </Box>

                        {/* Navigation Links - Hidden on mobile */}
                        {!isMobile && (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flex: 1,
                                justifyContent: 'center'
                            }}>
                                <Button
                                    startIcon={<HomeIcon />}
                                    sx={{
                                        color: '#fff',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        mx: 1,
                                        borderRadius: '8px',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        },
                                    }}
                                >
                                    Ana Sayfa
                                </Button>
                                <Button
                                    startIcon={<LibraryMusicIcon />}
                                    sx={{
                                        color: '#fff',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        mx: 1,
                                        borderRadius: '8px',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        },
                                    }}
                                >
                                    Müzik
                                </Button>
                                <Button
                                    startIcon={<PersonIcon />}
                                    sx={{
                                        color: '#fff',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        mx: 1,
                                        borderRadius: '8px',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        },
                                    }}
                                >
                                    Hakkımızda
                                </Button>
                            </Box>
                        )}

                        {/* Auth Buttons */}
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Button
                                variant="outlined"
                                onClick={handleLogin}
                                sx={{
                                    color: '#fff',
                                    borderColor: '#fff',
                                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                                    px: { xs: 2, sm: 2.5 },
                                    py: { xs: 0.5, sm: 1 },
                                    minWidth: { xs: '70px', sm: '90px' },
                                    borderRadius: '20px',
                                    '&:hover': {
                                        borderColor: '#fff',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                            >
                                Giriş
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleRegister}
                                sx={{
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                                    px: { xs: 2, sm: 2.5 },
                                    py: { xs: 0.5, sm: 1 },
                                    minWidth: { xs: '70px', sm: '90px' },
                                    borderRadius: '20px',
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                    },
                                }}
                            >
                                Kayıt
                            </Button>
                        </Stack>
                    </Toolbar>
                </ResponsiveContainer>
            </AppBar>

            {/* Main Content */}
            <Box sx={{ flex: 1, width: '100%' }}>
                {allLoaded ? <LoadedContent /> : <LoadingContent />}
            </Box>

            {/* Footer */}
            <Box
                sx={{
                    backgroundColor: '#000',
                    borderTop: '1px solid #333',
                    py: { xs: 4, sm: 5 },
                    width: '100%',
                }}
            >
                <ResponsiveContainer>
                    <Grid container spacing={{ xs: 3, sm: 4 }}>
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#fff',
                                    mb: 2,
                                    fontWeight: 600,
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                                }}
                            >
                                TrackBang
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#ccc',
                                    lineHeight: 1.6,
                                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
                                }}
                            >
                                En iyi müzik deneyimini sunuyoruz. Premium üyelikle sınırsız müzik keyfini yaşayın.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#fff',
                                    mb: 2,
                                    fontWeight: 600,
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                                }}
                            >
                                Linkler
                            </Typography>
                            <Stack spacing={1}>
                                {['Ana Sayfa', 'Müzik Kütüphanesi', 'Premium', 'İletişim'].map((link) => (
                                    <Typography
                                        key={link}
                                        variant="body2"
                                        sx={{
                                            color: '#ccc',
                                            cursor: 'pointer',
                                            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                                            transition: 'color 0.2s ease',
                                            '&:hover': {
                                                color: '#fff',
                                                transform: 'translateX(4px)'
                                            }
                                        }}
                                    >
                                        {link}
                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#fff',
                                    mb: 2,
                                    fontWeight: 600,
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                                }}
                            >
                                Destek
                            </Typography>
                            <Stack spacing={1}>
                                {['Yardım Merkezi', 'Gizlilik Politikası', 'Kullanım Koşulları'].map((link) => (
                                    <Typography
                                        key={link}
                                        variant="body2"
                                        sx={{
                                            color: '#ccc',
                                            cursor: 'pointer',
                                            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                                            transition: 'color 0.2s ease',
                                            '&:hover': {
                                                color: '#fff',
                                                transform: 'translateX(4px)'
                                            }
                                        }}
                                    >
                                        {link}
                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            borderTop: '1px solid #333',
                            mt: { xs: 3, sm: 4 },
                            pt: { xs: 2, sm: 3 },
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#666',
                                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' }
                            }}
                        >
                            © 2025 TrackBang. Tüm hakları saklıdır.
                        </Typography>
                    </Box>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
};

export default FreePage;