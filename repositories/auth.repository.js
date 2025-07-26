import User from '../models/user.model.js';

/**
 * Find a user by email
 * @param {string} email - User email
 * @returns {Promise<Object|null>} User or null if not found
 */
export const findByEmail = async (email) => {
    return await User.findOne({ email });
};

/**
 * Find a user by ID
 * @param {string} id - User ID
 * @returns {Promise<Object|null>} User or null if not found
 */
export const findById = async (id) => {
    return await User.findById(id).select('-password');
};

/**
 * Create a new user
 * @param {Object} userData - User data to create
 * @returns {Promise<Object>} Created user
 */
export const create = async (userData) => {
    const user = new User(userData);
    return await user.save();
};
