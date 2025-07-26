import * as buildService from '../services/build.service.js';

// Create a new build
export const createBuild = async (req, res) => {
    try {
        const userId = req.user.id;
        const buildData = req.body;

        const newBuild = await buildService.createBuild(buildData, userId);
        res.status(201).json({
            success: true,
            message: 'Build created successfully',
            data: newBuild
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Error creating build',
            error: error.message
        });
    }
};

// Get all builds
export const getAllBuilds = async (req, res) => {
    try {
        const builds = await buildService.getAllBuilds();
        res.status(200).json({
            success: true,
            message: 'Builds retrieved successfully',
            data: builds,
            count: builds.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Error fetching builds',
            error: error.message
        });
    }
};

// Get a single build by ID
export const getBuildById = async (req, res) => {
    try {
        const { id } = req.params;
        const build = await buildService.getBuildById(id);

        res.status(200).json({
            success: true,
            message: 'Build retrieved successfully',
            data: build
        });
    } catch (error) {
        const statusCode = error.message.includes('not found') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error fetching build',
            error: error.message
        });
    }
};

// Update a build by ID
export const updateBuild = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedBuild = await buildService.updateBuild(id, updateData);
        res.status(200).json({
            success: true,
            message: 'Build updated successfully',
            data: updatedBuild
        });
    } catch (error) {
        const statusCode = error.message.includes('not found') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error updating build',
            error: error.message
        });
    }
};

// Delete a build by ID
export const deleteBuild = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await buildService.deleteBuild(id);

        res.status(200).json({
            success: true,
            message: result.message,
            data: null
        });
    } catch (error) {
        const statusCode = error.message.includes('not found') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error deleting build',
            error: error.message
        });
    }
};

// Find Builds by User ID
export const getBuildsByUserId = async (req, res) => {
    try {
        const userId = req.user.id;
        const builds = await buildService.getBuildsByUserId(userId);

        res.status(200).json({
            success: true,
            message: 'User builds retrieved successfully',
            data: builds,
            count: builds.length
        });
    } catch (error) {
        const statusCode = error.message.includes('No builds found') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error fetching builds',
            error: error.message
        });
    }
};