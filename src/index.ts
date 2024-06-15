import express from "express";
import bodyParser from "body-parser";
import sensorRoutes from "../routes/sensorRoutes";

const app = express();

app.use(bodyParser.json());
app.use("/api", sensorRoutes);

export default app;
