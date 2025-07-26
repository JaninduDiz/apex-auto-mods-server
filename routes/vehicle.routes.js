import express from 'express';
import { createVehicle, getAllVehicles, getVehicleById, updateVehicle, deleteVehicle, getVehiclesByUserId } from '../controllers/vehicle.controller.js'
import { verifyToken } from '../middlewares/authToken.js';

const vehicle_router = express.Router();

vehicle_router.post('/', verifyToken, createVehicle);
vehicle_router.get('/', verifyToken, getAllVehicles);
vehicle_router.get('/user', verifyToken, getVehiclesByUserId);
vehicle_router.get('/:id', verifyToken, getVehicleById);
vehicle_router.put('/:id', verifyToken, updateVehicle);
vehicle_router.delete('/:id', verifyToken, deleteVehicle);

export default vehicle_router;