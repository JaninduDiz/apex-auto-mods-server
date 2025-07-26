import express from 'express';
import { createService, getAllServices, getServiceById, updateService, deleteService } from '../controllers/service.controller.js';
import { verifyToken } from '../middlewares/authToken.js';

const service_router = express.Router();

service_router.post('/', verifyToken, createService);
service_router.get('/', getAllServices);
service_router.get('/:id', verifyToken, getServiceById);
service_router.put('/:id', verifyToken, updateService);
service_router.delete('/:id', verifyToken, deleteService);

export default service_router;