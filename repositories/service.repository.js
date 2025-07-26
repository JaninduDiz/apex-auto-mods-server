import Service from '../models/service.model.js';

/**
 * Create a new service
 * @param {Object} serviceData - Service data to create
 * @returns {Promise<Object>} Created service
 */
export const create = async (serviceData) => {
    const service = new Service(serviceData);
    return await service.save();
};

/**
 * Find all services
 * @returns {Promise<Array>} Array of services
 */
export const findAll = async () => {
    return await Service.find();
};

/**
 * Find service by ID
 * @param {string} id - Service ID
 * @returns {Promise<Object|null>} Service or null if not found
 */
export const findById = async (id) => {
    return await Service.findById(id);
};

/**
 * Update service by ID
 * @param {string} id - Service ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object|null>} Updated service or null if not found
 */
export const updateById = async (id, updateData) => {
    return await Service.findByIdAndUpdate(id, updateData, { new: true });
};

/**
 * Delete service by ID
 * @param {string} id - Service ID
 * @returns {Promise<Object|null>} Deleted service or null if not found
 */
export const deleteById = async (id) => {
    return await Service.findByIdAndDelete(id);
};
