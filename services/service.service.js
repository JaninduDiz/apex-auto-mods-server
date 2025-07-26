import * as serviceRepository from '../repositories/service.repository.js';

/**
 * Create a new service
 * @param {Object} serviceData - Service data
 * @returns {Promise<Object>} Created service
 */
export const createService = async (serviceData) => {
    try {
        const { name, description, price } = serviceData;

        // Validate required fields
        if (!name || !description || !price) {
            throw new Error('Name, description, and price are required');
        }

        return await serviceRepository.create(serviceData);
    } catch (error) {
        throw new Error(`Failed to create service: ${error.message}`);
    }
};

/**
 * Get all services
 * @returns {Promise<Array>} Array of services
 */
export const getAllServices = async () => {
    try {
        return await serviceRepository.findAll();
    } catch (error) {
        throw new Error(`Failed to fetch services: ${error.message}`);
    }
};

/**
 * Get service by ID
 * @param {string} id - Service ID
 * @returns {Promise<Object>} Service
 * @throws {Error} If service not found
 */
export const getServiceById = async (id) => {
    try {
        if (!id) {
            throw new Error('Service ID is required');
        }

        const service = await serviceRepository.findById(id);
        if (!service) {
            throw new Error('Service not found');
        }

        return service;
    } catch (error) {
        throw new Error(`Failed to fetch service: ${error.message}`);
    }
};

/**
 * Update service by ID
 * @param {string} id - Service ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object>} Updated service
 * @throws {Error} If service not found
 */
export const updateService = async (id, updateData) => {
    try {
        if (!id) {
            throw new Error('Service ID is required');
        }

        const updatedService = await serviceRepository.updateById(id, updateData);
        if (!updatedService) {
            throw new Error('Service not found');
        }

        return updatedService;
    } catch (error) {
        throw new Error(`Failed to update service: ${error.message}`);
    }
};

/**
 * Delete service by ID
 * @param {string} id - Service ID
 * @returns {Promise<void>}
 * @throws {Error} If service not found
 */
export const deleteService = async (id) => {
    try {
        if (!id) {
            throw new Error('Service ID is required');
        }

        const deletedService = await serviceRepository.deleteById(id);
        if (!deletedService) {
            throw new Error('Service not found');
        }

        return { message: 'Service deleted successfully' };
    } catch (error) {
        throw new Error(`Failed to delete service: ${error.message}`);
    }
};
