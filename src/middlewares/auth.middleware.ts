import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma.js";
import ApiError from "../utils/apiError.js";

export const isLoggedin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get token from cookie
    const token = req.cookies.token;

    if (!token) {
      throw new ApiError("No token provided", 401);
    }

    // Verify token
    const decoded = jwt.verify(token, "aryan_nandini");

    if (typeof decoded === "string" || !decoded.id) {
      throw new ApiError("Invalid token", 401);
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { id: decoded.id  },
      select: { id: true, name: true, email: true }
    });

    if (!user) {
      throw new ApiError("User not found", 401);
    }

    // Attach user to request
    req.user = user;

    next();
  } catch (error) {
    throw new ApiError("Unauthorized", 401);
  }
};