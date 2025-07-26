import * as authRepository from '../repositories/auth.repository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * Register a new user
 * @param {Object} userData - User data
 * @param {string} userData.username - Username
 * @param {string} userData.email - Email
 * @param {string} userData.password - Password
 * @returns {Promise<Object>} Registered user with token
 */
export const register = async (userData) => {
    try {
        const { username, email, password } = userData;

        if (!username || !email || !password) {
            throw new Error('Not all fields have been entered.');
        }

        const existingUser = await authRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('An account with this email already exists.');
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = {
            username,
            email,
            password: passwordHash
        };

        const savedUser = await authRepository.create(newUser);

        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
        return {
            token,
            user: {
                id: savedUser._id,
                username: savedUser.username,
                email: savedUser.email
            }
        };
    } catch (error) {
        throw new Error(`Failed to register user: ${error.message}`);
    }
};

/**
 * Login a user
 * @param {Object} loginData - Login data
 * @param {string} loginData.email - Email
 * @param {string} loginData.password - Password
 * @returns {Promise<Object>} Logged-in user with token
 */
export const login = async (loginData) => {
    try {
        const { email, password } = loginData;

        if (!email || !password) {
            throw new Error('Not all fields have been entered.');
        }

        const user = await authRepository.findByEmail(email);
        if (!user) {
            throw new Error('No account with this email has been registered.');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials.');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        return {
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        };
    } catch (error) {
        throw new Error(`Failed to login user: ${error.message}`);
    }
};

/**
 * View user profile
 * @param {string} userId - User ID
 * @returns {Promise<Object>} User profile
 */
export const viewProfile = async (userId) => {
    try {
        const userDetails = await authRepository.findById(userId);
        if (!userDetails) {
            throw new Error('User not found.');
        }

        return userDetails;
    } catch (error) {
        throw new Error(`Failed to fetch user profile: ${error.message}`);
    }
};
