import * as authService from '../services/auth.service.js';

// Register a new user
export const register = async (req, res) => {
    try {
        const userData = req.body;

        const result = await authService.register(userData);
        res.status(200).json({
            success: true,
            message: 'User registered successfully',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Error registering user',
            error: error.message
        });
    }
};

// Login
export const login = async (req, res) => {
    try {
        const loginData = req.body;

        const result = await authService.login(loginData);
        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Error logging in user',
            error: error.message
        });
    }
};

// View profile
export const viewProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const userDetails = await authService.viewProfile(userId);
        res.status(200).json({
            success: true,
            message: 'User profile retrieved successfully',
            data: userDetails
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Error fetching user profile',
            error: error.message
        });
    }
};

