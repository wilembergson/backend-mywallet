import cors from "cors";
import express from "express";
import authRouter from "./routes/authRouter.js";
import financialEventsRouter from "./routes/financialEventsRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRouter)
app.use(financialEventsRouter)

export default app;
