import Express from "express";
import auth_router from "./auth.routes.js"
import service_router from "./service.routes.js";
import build_router from "./build.routes.js";
import vehicle_router from "./vehicle.routes.js";

const router = Express.Router();

router.use('/auth', auth_router);
router.use('/builds', build_router);
router.use('/vehicles', vehicle_router);
router.use('/services', service_router);


router.get('/', (req, res) => {
    res.json({
        message: '🔧 Apex Auto Mods API v1',
        status: 'Active',
        availableRoutes: {
            authentication: {
                endpoint: '/auth',
                methods: ['POST /register', 'POST /login', 'GET /profile']
            },
            vehicles: {
                endpoint: '/vehicles',
                methods: ['GET /', 'POST /', 'GET /user', 'GET /:id', 'PUT /:id', 'DELETE /:id']
            },
            builds: {
                endpoint: '/builds',
                methods: ['GET /', 'POST /', 'GET /user', 'GET /:id', 'PUT /:id', 'DELETE /:id']
            },
            services: {
                endpoint: '/services',
                methods: ['GET /', 'POST /', 'GET /:id', 'PUT /:id', 'DELETE /:id']
            }
        },
        lastUpdated: new Date().toISOString()
    });
});

export default router;
