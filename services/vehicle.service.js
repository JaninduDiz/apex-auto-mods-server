import * as vehicleRepository from '../repositories/vehicle.repository.js';

/**
 * Create a new vehicle
 * @param {Object} vehicleData - Vehicle data
 * @param {string} userId - User ID
 * @returns {Promise<Object>} Created vehicle
 */
export const createVehicle = async (vehicleData, userId) => {
    try {
        const { make, carModel, color, year, odoRead } = vehicleData;

        // Validate required fields
        if (!make || !carModel || !color || !year) {
            throw new Error('Make, car model, color, and year are required');
        }

        const newVehicleData = {
            userId,
            make,
            carModel,
            color,
            year,
            odoRead: odoRead || 0
        };

        return await vehicleRepository.create(newVehicleData);
    } catch (error) {
        throw new Error(`Failed to create vehicle: ${error.message}`);
    }
};

/**
 * Get all vehicles
 * @returns {Promise<Array>} Array of vehicles
 */
export const getAllVehicles = async () => {
    try {
        return await vehicleRepository.findAll();
    } catch (error) {
        throw new Error(`Failed to fetch vehicles: ${error.message}`);
    }
};

/**
 * Get vehicle by ID
 * @param {string} id - Vehicle ID
 * @returns {Promise<Object>} Vehicle
 * @throws {Error} If vehicle not found
 */
export const getVehicleById = async (id) => {
    try {
        if (!id) {
            throw new Error('Vehicle ID is required');
        }

        const vehicle = await vehicleRepository.findById(id);
        if (!vehicle) {
            throw new Error('Vehicle not found');
        }

        return vehicle;
    } catch (error) {
        throw new Error(`Failed to fetch vehicle: ${error.message}`);
    }
};

/**
 * Update vehicle by ID
 * @param {string} id - Vehicle ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object>} Updated vehicle
 * @throws {Error} If vehicle not found
 */
export const updateVehicle = async (id, updateData) => {
    try {
        if (!id) {
            throw new Error('Vehicle ID is required');
        }

        const updatedVehicle = await vehicleRepository.updateById(id, updateData);
        if (!updatedVehicle) {
            throw new Error('Vehicle not found');
        }

        return updatedVehicle;
    } catch (error) {
        throw new Error(`Failed to update vehicle: ${error.message}`);
    }
};

/**
 * Delete vehicle by ID
 * @param {string} id - Vehicle ID
 * @returns {Promise<void>}
 * @throws {Error} If vehicle not found
 */
export const deleteVehicle = async (id) => {
    try {
        if (!id) {
            throw new Error('Vehicle ID is required');
        }

        const deletedVehicle = await vehicleRepository.deleteById(id);
        if (!deletedVehicle) {
            throw new Error('Vehicle not found');
        }

        return { message: 'Vehicle deleted successfully' };
    } catch (error) {
        throw new Error(`Failed to delete vehicle: ${error.message}`);
    }
};


/**
 * Get builds by user ID
 * @param {string} userId - User ID
 * @returns {Promise<Array>} Array of user builds
 * @throws {Error} If no builds found for user
 */
export const getVehiclesByUserId = async (userId) => {
    try {
        if (!userId) {
            throw new Error('User ID is required');
        }

        const vehicles = await vehicleRepository.findByUserId(userId);
        if (!vehicles || vehicles.length === 0) {
            throw new Error('No vehicles found for this user');
        }

        return vehicles;
    } catch (error) {
        throw new Error(`Failed to fetch user vehicles: ${error.message}`);
    }
};