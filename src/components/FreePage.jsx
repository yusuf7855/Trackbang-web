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
    Paper,
    Grid,
    Card,
    CardContent
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PersonIcon from '@mui/icons-material/Person';
import './FreePage.css';

// Styled components for animations and custom styling
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

const AnimatedMusicIcon = styled(MusicNoteIcon)({
    fontSize: '5rem',
    color: '#fff',
    animation: `${pulse} 1s ease-in-out infinite alternate`,
});

const MainNavbar = styled(AppBar)({
    backgroundColor: '#000',
    borderBottom: '1px solid #333',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
});

const NavButton = styled(Button)({
    color: '#fff',
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    margin: '0 10px',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
});

const SpotifySection = styled(Box)({
    backgroundColor: '#0f0f0f',
    borderRadius: '20px',
    padding: '40px',
    margin: '40px 0',
});

const SpotifyGrid = styled(Grid)({
    gap: '20px',
});

const SpotifyCard = styled(Card)({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '& iframe': {
        borderRadius: '12px',
        width: '100%',
        border: 'none',
    },
});

const HeroSection = styled(Box)({
    background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
    padding: '80px 0',
    textAlign: 'center',
});

const CtaSection = styled(Box)({
    backgroundColor: '#1a1a1a',
    padding: '60px 0',
    textAlign: 'center',
});

const RegisterButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    borderRadius: '30px',
    padding: '12px 32px',
    textTransform: 'none',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
    margin: '0 8px',
    minWidth: '180px',
    '&:hover': {
        backgroundColor: '#f0f0f0',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4)',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1rem',
        padding: '10px 24px',
        minWidth: '160px',
        margin: '0 6px',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.2rem',
        padding: '16px 40px',
        minWidth: '200px',
    },
}));

const LoginButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    borderRadius: '30px',
    padding: '12px 32px',
    textTransform: 'none',
    border: '2px solid #fff',
    margin: '0 8px',
    minWidth: '180px',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        transform: 'translateY(-2px)',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1rem',
        padding: '10px 24px',
        minWidth: '160px',
        margin: '0 6px',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.2rem',
        padding: '16px 40px',
        minWidth: '200px',
    },
}));

const Footer = styled(Box)({
    backgroundColor: '#000',
    borderTop: '1px solid #333',
    padding: '40px 0',
    marginTop: 'auto',
});

const FreePage = () => {
    const [allLoaded, setAllLoaded] = useState(false);
    const navigate = useNavigate();

    const tracks = [
        { id: "4QHKR48C18rwlpSYW6rH7p" },
        { id: "3pPe4F2kFRp9ipARwxFmQr" },
        { id: "2MFs3zQcS0MuIjuyyG85fV" },
        { id: "0RMmME0OhJcrWtnb2kZMHL" },
        { id: "70sMnVjOXAbZCH5USpGuOG" },
    ];

    // Faster loading
    useEffect(() => {
        console.log('FreePage mounted, starting timer...');
        const timer = setTimeout(() => {
            console.log('Timer finished, showing content');
            setAllLoaded(true);
        }, 800);

        return () => {
            console.log('Cleaning up timer');
            clearTimeout(timer);
        };
    }, []);

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    const SpotifyEmbed = ({ trackId }) => {
        console.log('Rendering SpotifyEmbed for:', trackId);

        const spotifyUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&autoplay=0&hide_cover=0`;

        return (
            <SpotifyCard>
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <iframe
                        src={spotifyUrl}
                        width="100%"
                        height="152"
                        frameBorder="0"
                        allowtransparency="true"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        style={{
                            borderRadius: '12px',
                            minHeight: '152px',
                        }}
                    />
                </CardContent>
            </SpotifyCard>
        );
    };

    const LoadingContent = () => {
        console.log('Rendering LoadingContent');
        return (
            <HeroSection>
                <Container maxWidth="lg">
                    <Box sx={{ py: 10 }}>
                        <AnimatedMusicIcon />
                        <Typography
                            variant="h4"
                            sx={{
                                color: '#fff',
                                fontWeight: 600,
                                mt: 3,
                            }}
                        >
                            Müzik Yükleniyor...
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#ccc',
                                mt: 2,
                            }}
                        >
                            En sevdiğiniz şarkılar hazırlanıyor
                        </Typography>
                    </Box>
                </Container>
            </HeroSection>
        );
    };

    const LoadedContent = () => {
        console.log('Rendering LoadedContent');
        return (
            <>
                {/* Hero Section */}
                <HeroSection>
                    <Box sx={{
                        width: '100%',
                        px: { lg: 3, xl: 4, xxl: 6 },
                        maxWidth: { lg: '1400px', xl: '1600px', xxl: 'none' },
                        mx: 'auto'
                    }}>
                        <Typography
                            variant="h2"
                            sx={{
                                color: '#fff',
                                fontWeight: 700,
                                mb: 3,
                                fontSize: {
                                    lg: '3rem',
                                    xl: '4rem',
                                    xxl: '4.5rem'
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
                                maxWidth: { lg: '600px', xl: '800px', xxl: '1000px' },
                                mx: 'auto',
                                lineHeight: 1.6,
                                fontSize: {
                                    lg: '1.25rem',
                                    xl: '1.5rem',
                                    xxl: '1.75rem'
                                }
                            }}
                        >
                            En popüler şarkıları dinleyin ve premium deneyim için üye olun
                        </Typography>
                        <Box sx={{ mt: 4 }}>
                            <RegisterButton onClick={handleRegister}>
                                Hemen Kayıt Ol - 10€/ay
                            </RegisterButton>
                            <LoginButton onClick={handleLogin}>
                                Giriş Yap
                            </LoginButton>
                        </Box>
                    </Box>
                </HeroSection>

                {/* Spotify Tracks Section */}
                <Box sx={{
                    width: '100%',
                    py: { lg: 6, xl: 8, xxl: 10 },
                    px: { lg: 3, xl: 4, xxl: 6 }
                }}>
                    <Box sx={{
                        maxWidth: { lg: '1400px', xl: '1600px', xxl: 'none' },
                        mx: 'auto'
                    }}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: '#fff',
                                fontWeight: 600,
                                textAlign: 'center',
                                mb: 2,
                                fontSize: {
                                    lg: '2.5rem',
                                    xl: '3rem',
                                    xxl: '3.5rem'
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
                                    lg: '1.1rem',
                                    xl: '1.3rem',
                                    xxl: '1.5rem'
                                }
                            }}
                        >
                            Ücretsiz olarak dinleyebileceğiniz şarkılar
                        </Typography>

                        <SpotifySection>
                            <Grid container spacing={{ lg: 3, xl: 4, xxl: 5 }}>
                                {tracks.map((track, index) => (
                                    <Grid item xs={12} lg={6} xl={4} xxl={3} key={track.id}>
                                        <SpotifyEmbed trackId={track.id} />
                                    </Grid>
                                ))}
                            </Grid>
                        </SpotifySection>
                    </Box>
                </Box>

                {/* CTA Section */}
                <CtaSection>
                    <Box sx={{
                        width: '100%',
                        px: { lg: 3, xl: 4, xxl: 6 },
                        maxWidth: { lg: '1400px', xl: '1600px', xxl: 'none' },
                        mx: 'auto'
                    }}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: '#fff',
                                fontWeight: 600,
                                mb: 3,
                                fontSize: {
                                    lg: '2.5rem',
                                    xl: '3rem',
                                    xxl: '3.5rem'
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
                                maxWidth: { lg: '700px', xl: '900px', xxl: '1100px' },
                                mx: 'auto',
                                fontSize: {
                                    lg: '1.1rem',
                                    xl: '1.3rem',
                                    xxl: '1.5rem'
                                }
                            }}
                        >
                            Sınırsız müzik, playlist oluşturma, offline dinleme ve daha fazlası için premium üyelik alın
                        </Typography>
                        <Box>
                            <RegisterButton onClick={handleRegister}>
                                Premium Üyelik - 10€/ay
                            </RegisterButton>
                            <LoginButton onClick={handleLogin}>
                                Zaten Üye misiniz?
                            </LoginButton>
                        </Box>
                    </Box>
                </CtaSection>
            </>
        );
    };

    console.log('FreePage render - allLoaded:', allLoaded);

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#000', color: '#fff', display: 'flex', flexDirection: 'column' }}>
            {/* Navigation */}
            <MainNavbar position="static" elevation={0}>
                <Box sx={{ width: '100%', px: { lg: 3, xl: 4, xxl: 5 } }}>
                    <Toolbar sx={{
                        justifyContent: 'space-between',
                        py: 1,
                        minHeight: { lg: '70px', xl: '80px' },
                        maxWidth: { lg: '1400px', xl: '1600px', xxl: 'none' },
                        mx: 'auto',
                        width: '100%'
                    }}>
                        {/* Logo */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                                component="img"
                                src="/assets/your_logo.png"
                                alt="Logo"
                                sx={{
                                    height: { lg: 40, xl: 50 },
                                    maxWidth: { lg: 160, xl: 200 },
                                    objectFit: 'contain',
                                    mr: 3
                                }}
                            />
                        </Box>

                        {/* Navigation Links */}
                        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                            <NavButton startIcon={<HomeIcon />}>
                                Ana Sayfa
                            </NavButton>
                            <NavButton startIcon={<LibraryMusicIcon />}>
                                Müzik
                            </NavButton>
                            <NavButton startIcon={<PersonIcon />}>
                                Hakkımızda
                            </NavButton>
                        </Box>

                        {/* Auth Buttons */}
                        <Box sx={{ display: 'flex', gap: { lg: 2, xl: 3 } }}>
                            <Button
                                variant="outlined"
                                onClick={handleLogin}
                                sx={{
                                    color: '#fff',
                                    borderColor: '#fff',
                                    textTransform: 'none',
                                    padding: { lg: '8px 20px', xl: '10px 24px' },
                                    fontSize: { lg: '0.9rem', xl: '1rem' },
                                    '&:hover': {
                                        borderColor: '#fff',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                            >
                                Giriş Yap
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleRegister}
                                sx={{
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    padding: { lg: '8px 20px', xl: '10px 24px' },
                                    fontSize: { lg: '0.9rem', xl: '1rem' },
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                    },
                                }}
                            >
                                Kayıt Ol
                            </Button>
                        </Box>
                    </Toolbar>
                </Box>
            </MainNavbar>

            {/* Main Content */}
            <Box sx={{ flex: 1 }}>
                {allLoaded ? <LoadedContent /> : <LoadingContent />}
            </Box>

            {/* Footer */}
            <Footer>
                <Box sx={{
                    width: '100%',
                    px: { lg: 3, xl: 4, xxl: 6 },
                    maxWidth: { lg: '1400px', xl: '1600px', xxl: 'none' },
                    mx: 'auto'
                }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={4}>
                            <Typography variant="h6" sx={{
                                color: '#fff',
                                mb: 2,
                                fontWeight: 600,
                                fontSize: { lg: '1.1rem', xl: '1.25rem', xxl: '1.4rem' }
                            }}>
                                TrackBang
                            </Typography>
                            <Typography variant="body2" sx={{
                                color: '#ccc',
                                lineHeight: 1.6,
                                fontSize: { lg: '0.9rem', xl: '1rem', xxl: '1.1rem' }
                            }}>
                                En iyi müzik deneyimini sunuyoruz. Premium üyelikle sınırsız müzik keyfini yaşayın.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Typography variant="h6" sx={{
                                color: '#fff',
                                mb: 2,
                                fontWeight: 600,
                                fontSize: { lg: '1.1rem', xl: '1.25rem', xxl: '1.4rem' }
                            }}>
                                Linkler
                            </Typography>
                            <Stack spacing={1}>
                                <Typography variant="body2" sx={{
                                    color: '#ccc',
                                    cursor: 'pointer',
                                    fontSize: { lg: '0.9rem', xl: '1rem', xxl: '1.1rem' },
                                    '&:hover': { color: '#fff' }
                                }}>
                                    Ana Sayfa
                                </Typography>
                                <Typography variant="body2" sx={{
                                    color: '#ccc',
                                    cursor: 'pointer',
                                    fontSize: { lg: '0.9rem', xl: '1rem', xxl: '1.1rem' },
                                    '&:hover': { color: '#fff' }
                                }}>
                                    Müzik Kütüphanesi
                                </Typography>
                                <Typography variant="body2" sx={{
                                    color: '#ccc',
                                    cursor: 'pointer',
                                    fontSize: { lg: '0.9rem', xl: '1rem', xxl: '1.1rem' },
                                    '&:hover': { color: '#fff' }
                                }}>
                                    Premium
                                </Typography>
                                <Typography variant="body2" sx={{
                                    color: '#ccc',
                                    cursor: 'pointer',
                                    fontSize: { lg: '0.9rem', xl: '1rem', xxl: '1.1rem' },
                                    '&:hover': { color: '#fff' }
                                }}>
                                    İletişim
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Typography variant="h6" sx={{
                                color: '#fff',
                                mb: 2,
                                fontWeight: 600,
                                fontSize: { lg: '1.1rem', xl: '1.25rem', xxl: '1.4rem' }
                            }}>
                                Destek
                            </Typography>
                            <Stack spacing={1}>
                                <Typography variant="body2" sx={{
                                    color: '#ccc',
                                    cursor: 'pointer',
                                    fontSize: { lg: '0.9rem', xl: '1rem', xxl: '1.1rem' },
                                    '&:hover': { color: '#fff' }
                                }}>
                                    Yardım Merkezi
                                </Typography>
                                <Typography variant="body2" sx={{
                                    color: '#ccc',
                                    cursor: 'pointer',
                                    fontSize: { lg: '0.9rem', xl: '1rem', xxl: '1.1rem' },
                                    '&:hover': { color: '#fff' }
                                }}>
                                    Gizlilik Politikası
                                </Typography>
                                <Typography variant="body2" sx={{
                                    color: '#ccc',
                                    cursor: 'pointer',
                                    fontSize: { lg: '0.9rem', xl: '1rem', xxl: '1.1rem' },
                                    '&:hover': { color: '#fff' }
                                }}>
                                    Kullanım Koşulları
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box sx={{ borderTop: '1px solid #333', mt: 4, pt: 3, textAlign: 'center' }}>
                        <Typography variant="body2" sx={{
                            color: '#666',
                            fontSize: { lg: '0.85rem', xl: '0.9rem', xxl: '1rem' }
                        }}>
                            © 2025 TrackBang. Tüm hakları saklıdır.
                        </Typography>
                    </Box>
                </Box>
            </Footer>
        </Box>
    );
};

export default FreePage;