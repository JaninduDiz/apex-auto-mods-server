import Build from '../models/build.model.js';

/**
 * Create a new build
 * @param {Object} buildData - Build data to create
 * @returns {Promise<Object>} Created build
 */
export const create = async (buildData) => {
    const build = new Build(buildData);
    return await build.save();
};

/**
 * Find all builds
 * @returns {Promise<Array>} Array of builds
 */
export const findAll = async () => {
    return await Build.find();
};

/**
 * Find build by ID
 * @param {string} id - Build ID
 * @returns {Promise<Object|null>} Build or null if not found
 */
export const findById = async (id) => {
    return await Build.findById(id);
};

/**
 * Find builds by user ID
 * @param {string} userId - User ID
 * @returns {Promise<Array>} Array of builds for the user
 */
export const findByUserId = async (userId) => {
    return await Build.find({ userId });
};

/**
 * Update build by ID
 * @param {string} id - Build ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object|null>} Updated build or null if not found
 */
export const updateById = async (id, updateData) => {
    return await Build.findByIdAndUpdate(id, updateData, { new: true });
};

/**
 * Delete build by ID
 * @param {string} id - Build ID
 * @returns {Promise<Object|null>} Deleted build or null if not found
 */
export const deleteById = async (id) => {
    return await Build.findByIdAndDelete(id);
};
