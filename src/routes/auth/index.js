// import authController from "../../controller/auth/index.js";
// import { Router } from "express";

// const authRouter = Router();

// authRouter.post("/auth/signup", authController.signup);

// authRouter.post("/auth/signin/", authController.signin);

// export default authRouter;
import AuthController from "../../controller/auth/index.js";
import AuthenticateMiddleware from '../../middleware/index.js';
import { Router } from "express";

const authRouter = Router();

authRouter.post("/auth/signup",AuthenticateMiddleware, AuthController.signup);

authRouter.post("/auth/signin",AuthenticateMiddleware, AuthController.signin);

export default authRouter;
