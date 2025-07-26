import express from 'express';
import { createBuild, getAllBuilds, getBuildById, updateBuild, deleteBuild, getBuildsByUserId } from '../controllers/build.controller.js';
import { verifyToken } from '../middlewares/authToken.js';

const build_router = express.Router();

build_router.post('/', verifyToken, createBuild);
build_router.get('/', verifyToken, getAllBuilds);
build_router.get('/user', verifyToken, getBuildsByUserId);
build_router.get('/:id', verifyToken, getBuildById);
build_router.put('/:id', verifyToken, updateBuild);
build_router.delete('/:id', verifyToken, deleteBuild);


export default build_router;