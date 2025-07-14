// src/config/axios.config.jsx
import axios from 'axios';

// API base URL configuration
const API_BASE_URL =  'http://localhost:5000';

// Create axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // 10 second timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor - add auth token to requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor - handle token expiration
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('username');
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');

            // Redirect to login page
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;