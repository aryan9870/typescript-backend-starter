import { Router } from "express";
import { isLoggedin } from "../middlewares/auth.middleware.js";
import { getProfile, updateProfile } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { updateProfileSchema } from "../validations/user.validation.js";

const router = Router();

router.get("/profile", isLoggedin, getProfile);
router.patch("/profile", isLoggedin, validate(updateProfileSchema), updateProfile);


export default router;