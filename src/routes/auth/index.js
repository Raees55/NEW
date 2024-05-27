import authController from "../../controller/auth/index.js";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/auth/signup", authController.signup);

authRouter.post("/auth/signin/", authController.signin);

export default authRouter;
