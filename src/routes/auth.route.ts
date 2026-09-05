import { Router } from "express";
import {
  register,
  login,
  logout,
} from "../controllers/auth.controller.js";
import { isLoggedin } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { loginSchema, registerSchema } from "../validations/auth.validation.js";
import { authLimiter } from "../middlewares/rateLimit.middleware.js";

const router = Router();

router.post("/register", authLimiter, validate(registerSchema), register);
router.post("/login", authLimiter, validate(loginSchema), login);
router.post("/logout", isLoggedin, logout);

export default router;