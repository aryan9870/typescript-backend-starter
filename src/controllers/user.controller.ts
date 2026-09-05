import type { Request, Response } from "express";

export const getProfile = async (req: Request, res: Response) => {

    const user = req.user;


    return res.status(200).json({
        success: true,
        user,
    });
};