import * as buildRepository from '../repositories/build.repository.js';

/**
 * Create a new build
 * @param {Object} buildData - Build data
 * @param {string} buildData.carModel - Car model
 * @param {string} buildData.color - Car color
 * @param {string} buildData.wheelColor - Wheel color (optional)
 * @param {Array} buildData.selectedParts - Selected parts
 * @param {string} userId - User ID
 * @returns {Promise<Object>} Created build
 */
export const createBuild = async (buildData, userId) => {
    try {
        const { carModel, color, wheelColor, selectedParts } = buildData;

        // Validate required fields
        if (!carModel || !color) {
            throw new Error('Car model and color are required');
        }

        const newBuildData = {
            userId,
            carModel,
            color,
            wheelColor,
            selectedParts: selectedParts || []
        };

        return await buildRepository.create(newBuildData);
    } catch (error) {
        throw new Error(`Failed to create build: ${error.message}`);
    }
};

/**
 * Get all builds
 * @returns {Promise<Array>} Array of builds
 */
export const getAllBuilds = async () => {
    try {
        return await buildRepository.findAll();
    } catch (error) {
        throw new Error(`Failed to fetch builds: ${error.message}`);
    }
};

/**
 * Get build by ID
 * @param {string} id - Build ID
 * @returns {Promise<Object>} Build
 * @throws {Error} If build not found
 */
export const getBuildById = async (id) => {
    try {
        if (!id) {
            throw new Error('Build ID is required');
        }

        const build = await buildRepository.findById(id);
        if (!build) {
            throw new Error('Build not found');
        }

        return build;
    } catch (error) {
        throw new Error(`Failed to fetch build: ${error.message}`);
    }
};

/**
 * Update build by ID
 * @param {string} id - Build ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object>} Updated build
 * @throws {Error} If build not found
 */
export const updateBuild = async (id, updateData) => {
    try {
        if (!id) {
            throw new Error('Build ID is required');
        }

        const { carModel, color, wheelColor, selectedParts } = updateData;
        const updateFields = {};

        if (carModel) updateFields.carModel = carModel;
        if (color) updateFields.color = color;
        if (wheelColor !== undefined) updateFields.wheelColor = wheelColor;
        if (selectedParts) updateFields.selectedParts = selectedParts;

        const updatedBuild = await buildRepository.updateById(id, updateFields);
        if (!updatedBuild) {
            throw new Error('Build not found');
        }

        return updatedBuild;
    } catch (error) {
        throw new Error(`Failed to update build: ${error.message}`);
    }
};

/**
 * Delete build by ID
 * @param {string} id - Build ID
 * @returns {Promise<void>}
 * @throws {Error} If build not found
 */
export const deleteBuild = async (id) => {
    try {
        if (!id) {
            throw new Error('Build ID is required');
        }

        const deletedBuild = await buildRepository.deleteById(id);
        if (!deletedBuild) {
            throw new Error('Build not found');
        }

        return { message: 'Build deleted successfully' };
    } catch (error) {
        throw new Error(`Failed to delete build: ${error.message}`);
    }
};

/**
 * Get builds by user ID
 * @param {string} userId - User ID
 * @returns {Promise<Array>} Array of user builds
 * @throws {Error} If no builds found for user
 */
export const getBuildsByUserId = async (userId) => {
    try {
        if (!userId) {
            throw new Error('User ID is required');
        }

        const builds = await buildRepository.findByUserId(userId);
        if (!builds || builds.length === 0) {
            throw new Error('No builds found for this user');
        }

        return builds;
    } catch (error) {
        throw new Error(`Failed to fetch user builds: ${error.message}`);
    }
};
