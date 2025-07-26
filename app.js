import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";


const app = Express();
dotenv.config();

//MIDDLEWARE
app.use(cors());
app.use(Express.json({ limit: '100mb' }));
app.use(Express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: '🚗 Welcome to Apex Auto Mods API Server!',
    status: 'Online ✅',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      auth: '/api/v1/auth',
      vehicles: '/api/v1/vehicles',
      builds: '/api/v1/builds',
      services: '/api/v1/services'
    },
    documentation: 'API is ready to serve your auto modification needs!',
    developer: 'Janindu Dissanayake'
  });
});

//ROUTES
app.use("/api/v1", router);




export default app;