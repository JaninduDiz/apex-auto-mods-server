import Vehicle from '../models/vehicle.model.js';

// Create a new vehicle
export const createVehicle = async (req, res) => {
    try {
        const { make, carModel, color, year, odoRead } = req.body;
        const userId = req.user.id;
        const newVehicle = new Vehicle({ userId, make, carModel, color, year, odoRead });
        await newVehicle.save();
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(500).json({ message: 'Error creating vehicle', error });
    }
};

// Get all vehicles
export const getAllVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching vehicles', error });
    }
};

// Get a single vehicle by ID
export const getVehicleById = async (req, res) => {
    try {
        const { id } = req.params;
        const vehicle = await Vehicle.findById(id);
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching vehicle', error });
    }
};

// Update a vehicle by ID
export const updateVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const { make, carModel, color, year, odoRead } = req.body;
        const updatedVehicle = await Vehicle.findByIdAndUpdate(
            id,
            { make, carModel, color, year, odoRead },
            { new: true }
        );
        if (!updatedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json(updatedVehicle);
    } catch (error) {
        res.status(500).json({ message: 'Error updating vehicle', error });
    }
};

// Delete a vehicle by ID
export const deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedVehicle = await Vehicle.findByIdAndDelete(id);
        if (!deletedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting vehicle', error });
    }
};
