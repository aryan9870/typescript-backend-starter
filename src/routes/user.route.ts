import { Router } from "express";
import { isLoggedin } from "../middlewares/auth.middleware.js";
import { getProfile } from "../controllers/user.controller.js";

const router = Router();

router.get("/profile", isLoggedin, getProfile);


export default router;