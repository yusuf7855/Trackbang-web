import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Alert,
    CircularProgress,
    Divider,
    InputAdornment,
    IconButton,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    Email as EmailIcon,
    Lock as LockIcon,
    Visibility,
    VisibilityOff,
    MusicNote as MusicNoteIcon,
    ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import api from '../config/axios.config'; // Updated import

const LoginPage = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear errors when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
        if (apiError) setApiError('');
    };

    const validateForm = () => {
        const newErrors = {};

        // Email validation - sadece boş olup olmadığını kontrol et
        if (!formData.email.trim()) {
            newErrors.email = 'E-posta gerekli';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Şifre gerekli';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Şifre en az 6 karakter olmalı';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        setApiError('');

        try {
            const response = await api.post('/api/login', {
                email: formData.email.trim().toLowerCase(),
                password: formData.password
            });

            if (response.data.token) {
                // Store auth data
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('firstName', response.data.firstName);
                localStorage.setItem('lastName', response.data.lastName);

                // Success - redirect to homepage
                navigate('/homepage', { replace: true });
            }
        } catch (error) {
            console.error('Login error:', error);

            if (error.response?.data?.message) {
                setApiError(error.response.data.message);
            } else if (error.response?.status === 400) {
                setApiError('E-posta veya şifre hatalı');
            } else if (error.response?.status >= 500) {
                setApiError('Sunucu hatası. Lütfen daha sonra tekrar deneyin.');
            } else {
                setApiError('Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: { xs: 2, sm: 4 },
                px: { xs: 2, sm: 3 }
            }}
        >
            <Container maxWidth="sm">
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '450px',
                        mx: 'auto'
                    }}
                >
                    {/* Back Button */}
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={handleBackToHome}
                        sx={{
                            color: '#fff',
                            mb: 3,
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }
                        }}
                    >
                        Ana Sayfaya Dön
                    </Button>

                    {/* Login Card */}
                    <Paper
                        elevation={24}
                        sx={{
                            p: { xs: 3, sm: 4 },
                            backgroundColor: 'rgba(26, 26, 26, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '20px',
                        }}
                    >
                        {/* Logo and Title */}
                        <Box sx={{ textAlign: 'center', mb: 4 }}>
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 60,
                                    height: 60,
                                    backgroundColor: '#fff',
                                    borderRadius: '50%',
                                    mb: 2,
                                }}
                            >
                                <MusicNoteIcon sx={{ fontSize: 30, color: '#000' }} />
                            </Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: '#fff',
                                    fontWeight: 700,
                                    mb: 1,
                                    fontSize: { xs: '1.75rem', sm: '2rem' }
                                }}
                            >
                                TrackBang
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#ccc',
                                    fontSize: { xs: '0.9rem', sm: '1rem' }
                                }}
                            >
                                Hesabınıza giriş yapın
                            </Typography>
                        </Box>

                        {/* Error Alert */}
                        {apiError && (
                            <Alert
                                severity="error"
                                sx={{
                                    mb: 3,
                                    backgroundColor: 'rgba(211, 47, 47, 0.1)',
                                    color: '#f44336',
                                    '& .MuiAlert-icon': {
                                        color: '#f44336'
                                    }
                                }}
                            >
                                {apiError}
                            </Alert>
                        )}

                        {/* Login Form */}
                        <Box component="form" onSubmit={handleSubmit}>
                            {/* Email Field */}
                            <TextField
                                fullWidth
                                name="email"
                                type="text"
                                label="E-posta"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                disabled={loading}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon sx={{ color: '#ccc' }} />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    mb: 3,
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        '& fieldset': {
                                            borderColor: 'rgba(255, 255, 255, 0.2)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(255, 255, 255, 0.3)',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#fff',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#ccc',
                                        '&.Mui-focused': {
                                            color: '#fff',
                                        },
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: '#fff',
                                    },
                                }}
                            />

                            {/* Password Field */}
                            <TextField
                                fullWidth
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                label="Şifre"
                                value={formData.password}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={errors.password}
                                disabled={loading}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon sx={{ color: '#ccc' }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                                sx={{ color: '#ccc' }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    mb: 4,
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        '& fieldset': {
                                            borderColor: 'rgba(255, 255, 255, 0.2)',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(255, 255, 255, 0.3)',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#fff',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#ccc',
                                        '&.Mui-focused': {
                                            color: '#fff',
                                        },
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: '#fff',
                                    },
                                }}
                            />

                            {/* Login Button */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={loading}
                                sx={{
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    py: 1.5,
                                    mb: 3,
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                        transform: 'translateY(-1px)',
                                    },
                                    '&:disabled': {
                                        backgroundColor: '#666',
                                        color: '#999',
                                    },
                                }}
                            >
                                {loading ? (
                                    <CircularProgress size={24} sx={{ color: '#000' }} />
                                ) : (
                                    'Giriş Yap'
                                )}
                            </Button>

                            {/* Forgot Password */}
                            <Box sx={{ textAlign: 'center', mb: 3 }}>
                                <Button
                                    onClick={handleForgotPassword}
                                    sx={{
                                        color: '#ccc',
                                        textTransform: 'none',
                                        textDecoration: 'underline',
                                        '&:hover': {
                                            color: '#fff',
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    Şifremi Unuttum
                                </Button>
                            </Box>

                            {/* Divider */}
                            <Divider
                                sx={{
                                    '&::before, &::after': {
                                        borderColor: 'rgba(255, 255, 255, 0.2)',
                                    },
                                    mb: 3,
                                }}
                            >
                                <Typography sx={{ color: '#ccc', fontSize: '0.9rem' }}>
                                    veya
                                </Typography>
                            </Divider>

                            {/* Register Link */}
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography sx={{ color: '#ccc', mb: 1 }}>
                                    Hesabınız yok mu?
                                </Typography>
                                <Button
                                    component={Link}
                                    to="/register"
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        color: '#fff',
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                        fontWeight: 'bold',
                                        py: 1.5,
                                        borderRadius: '12px',
                                        textTransform: 'none',
                                        '&:hover': {
                                            borderColor: '#fff',
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        },
                                    }}
                                >
                                    Hesap Oluştur
                                </Button>
                            </Box>
                        </Box>
                    </Paper>

                    {/* Footer */}
                    <Box sx={{ textAlign: 'center', mt: 3 }}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#666',
                                fontSize: '0.85rem'
                            }}
                        >
                            © 2025 TrackBang. Tüm hakları saklıdır.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default LoginPage;