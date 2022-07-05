import { Router } from "express";
import { signup } from "../controllers/authController.js";

const authRouter = Router()

authRouter.post('/sign-up', signup)

export default authRouter