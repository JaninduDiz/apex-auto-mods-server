import * as vehicleService from '../services/vehicle.service.js';

// Create a new vehicle
export const createVehicle = async (req, res) => {
    try {
        const userId = req.user.id;
        const vehicleData = req.body;

        const newVehicle = await vehicleService.createVehicle(vehicleData, userId);
        res.status(201).json({
            success: true,
            message: 'Vehicle created successfully',
            data: newVehicle
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Error creating vehicle',
            error: error.message
        });
    }
};

// Get all vehicles
export const getAllVehicles = async (req, res) => {
    try {
        const vehicles = await vehicleService.getAllVehicles();
        res.status(200).json({
            success: true,
            message: 'Vehicles retrieved successfully',
            data: vehicles,
            count: vehicles.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Error fetching vehicles',
            error: error.message
        });
    }
};

// Get a single vehicle by ID
export const getVehicleById = async (req, res) => {
    try {
        const { id } = req.params;
        const vehicle = await vehicleService.getVehicleById(id);

        res.status(200).json({
            success: true,
            message: 'Vehicle retrieved successfully',
            data: vehicle
        });
    } catch (error) {
        const statusCode = error.message.includes('not found') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error fetching vehicle',
            error: error.message
        });
    }
};

// Update a vehicle by ID
export const updateVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedVehicle = await vehicleService.updateVehicle(id, updateData);
        res.status(200).json({
            success: true,
            message: 'Vehicle updated successfully',
            data: updatedVehicle
        });
    } catch (error) {
        const statusCode = error.message.includes('not found') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error updating vehicle',
            error: error.message
        });
    }
};

// Delete a vehicle by ID
export const deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await vehicleService.deleteVehicle(id);

        res.status(200).json({
            success: true,
            message: result.message,
            data: null
        });
    } catch (error) {
        const statusCode = error.message.includes('not found') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error deleting vehicle',
            error: error.message
        });
    }
};

// Get vehicles by user ID
export const getVehiclesByUserId = async (req, res) => {
    try {
        const userId = req.user.id;
        const vehicles = await vehicleService.getVehiclesByUserId(userId);

        res.status(200).json({
            success: true,
            message: 'User vehicles retrieved successfully',
            data: vehicles,
            count: vehicles.length
        });
    } catch (error) {
        const statusCode = error.message.includes('No vehicles found') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error fetching vehicles',
            error: error.message
        });
    }
};