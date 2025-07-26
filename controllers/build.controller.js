import Build from '../models/build.model.js';

// Create a new build
export const createBuild = async (req, res) => {
    try {
        const { carModel, color, selectedParts } = req.body;
        const userId = req.user.id
        const newBuild = new Build({ userId, carModel, color, selectedParts });
        await newBuild.save();
        res.status(201).json(newBuild);
    } catch (error) {
        res.status(500).json({ message: 'Error creating build', error });
    }
};

// Get all builds
export const getAllBuilds = async (req, res) => {
    try {
        const builds = await Build.find();
        res.status(200).json(builds);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching builds', error });
    }
};

// Get a single build by ID
export const getBuildById = async (req, res) => {
    try {
        const { id } = req.params;
        const build = await Build.findById(id);
        if (!build) {
            return res.status(404).json({ message: 'Build not found' });
        }
        res.status(200).json(build);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching build', error });
    }
};

// Update a build by ID
export const updateBuild = async (req, res) => {
    try {
        const { id } = req.params;
        const { carModel, color, selectedParts } = req.body;
        const updatedBuild = await Build.findByIdAndUpdate(
            id,
            { carModel, color, selectedParts },
            { new: true }
        );
        if (!updatedBuild) {
            return res.status(404).json({ message: 'Build not found' });
        }
        res.status(200).json(updatedBuild);
    } catch (error) {
        res.status(500).json({ message: 'Error updating build', error });
    }
};

// Delete a build by ID
export const deleteBuild = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBuild = await Build.findByIdAndDelete(id);
        if (!deletedBuild) {
            return res.status(404).json({ message: 'Build not found' });
        }
        res.status(200).json({ message: 'Build deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting build', error });
    }
};

//Find Builds by User ID
export const getBuildsByUserId = async (req, res) => {
    try {
        const userId = req.user.id;
        const builds = await Build.find({ userId });
        if (!builds || builds.length === 0) {
            return res.status(404).json({ message: 'No builds found for this user' });
        }
        res.status(200).json(builds);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching builds', error });
    }
}