import  express, { Application } from "express";
import cors from "cors"
import { envData } from "./config/env.config";

const app: Application = express();

// ** Global middlewares
app.use(express.json());
app.use(cors({
    origin: envData.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}));



// Run server
app.listen(envData.PORT, () => console.log(`Server is running on: http://localhost:${envData.PORT}`))
