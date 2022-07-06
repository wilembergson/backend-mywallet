import { Router } from "express";
import { signin, signup } from "../controllers/authController.js";

const authRouter = Router()

authRouter.post('/sign-up', signup)
authRouter.post('/sign-in', signin)

export default authRouter