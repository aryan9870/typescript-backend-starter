import type { Request, Response } from "express";
import { updateUserProfile } from "../services/user.service.js";

export const getProfile = async (req: Request, res: Response) => {

    const user = req.user;


    return res.status(200).json({
        success: true,
        user,
    });
};

export const updateProfile = async (req: Request, res: Response) => {

    if (!req.user) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized",
        });
    }

    const userId = req.user.id;
    const { name, avatar } = req.body;

    const user = await updateUserProfile(userId, { name, avatar });

    return res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        user,
    });
}