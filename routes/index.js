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
    res.send('Welcome to Apex-Auto-Mods API');
});

export default router;
