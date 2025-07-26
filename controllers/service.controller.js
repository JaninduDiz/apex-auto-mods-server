import * as serviceService from '../services/service.service.js';

// Create a new service
export const createService = async (req, res) => {
    try {
        const serviceData = req.body;

        const newService = await serviceService.createService(serviceData);
        res.status(201).json({
            success: true,
            message: 'Service created successfully',
            data: newService
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Error creating service',
            error: error.message
        });
    }
};

// Get all services
export const getAllServices = async (req, res) => {
    try {
        const services = await serviceService.getAllServices();
        res.status(200).json({
            success: true,
            message: 'Services retrieved successfully',
            data: services,
            count: services.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Error fetching services',
            error: error.message
        });
    }
};

// Get a single service by ID
export const getServiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await serviceService.getServiceById(id);

        res.status(200).json({
            success: true,
            message: 'Service retrieved successfully',
            data: service
        });
    } catch (error) {
        const statusCode = error.message.includes('not found') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error fetching service',
            error: error.message
        });
    }
};

// Update a service by ID
export const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedService = await serviceService.updateService(id, updateData);
        res.status(200).json({
            success: true,
            message: 'Service updated successfully',
            data: updatedService
        });
    } catch (error) {
        const statusCode = error.message.includes('not found') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error updating service',
            error: error.message
        });
    }
};

// Delete a service by ID
export const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await serviceService.deleteService(id);

        res.status(200).json({
            success: true,
            message: result.message,
            data: null
        });
    } catch (error) {
        const statusCode = error.message.includes('not found') ? 404 : 500;
        res.status(statusCode).json({
            success: false,
            message: error.message || 'Error deleting service',
            error: error.message
        });
    }
};


