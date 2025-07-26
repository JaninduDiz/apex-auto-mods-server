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
  res.send('Connected to Apex-Auto-Mods Server');
});

//ROUTES
app.use("/api/v1", router);




export default app;