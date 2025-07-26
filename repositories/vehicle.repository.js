import Vehicle from '../models/vehicle.model.js';

/**
 * Create a new vehicle
 * @param {Object} vehicleData - Vehicle data to create
 * @returns {Promise<Object>} Created vehicle
 */
export const create = async (vehicleData) => {
    const vehicle = new Vehicle(vehicleData);
    return await vehicle.save();
};

/**
 * Find all vehicles
 * @returns {Promise<Array>} Array of vehicles
 */
export const findAll = async () => {
    return await Vehicle.find();
};

/**
 * Find vehicle by ID
 * @param {string} id - Vehicle ID
 * @returns {Promise<Object|null>} Vehicle or null if not found
 */
export const findById = async (id) => {
    return await Vehicle.findById(id);
};

/**
 * Update vehicle by ID
 * @param {string} id - Vehicle ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object|null>} Updated vehicle or null if not found
 */
export const updateById = async (id, updateData) => {
    return await Vehicle.findByIdAndUpdate(id, updateData, { new: true });
};

/**
 * Delete vehicle by ID
 * @param {string} id - Vehicle ID
 * @returns {Promise<Object|null>} Deleted vehicle or null if not found
 */
export const deleteById = async (id) => {
    return await Vehicle.findByIdAndDelete(id);
};

/**
 * Find vehicles by user ID
 * @param {string} userId - User ID
 * @returns {Promise<Array>} Array of vehicles for the user
 */
export const findByUserId = async (userId) => {
    return await Vehicle.find({ userId });
};