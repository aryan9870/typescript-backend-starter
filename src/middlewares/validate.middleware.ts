import type { Request, Response, NextFunction } from "express";
import type { ZodType } from "zod";
import ApiError from "../utils/apiError.js";

export const validate = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = Object.fromEntries(
        result.error.issues.map((issue) => [
          issue.path[0],
          issue.message,
        ])
      );

      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      });
    }

    req.body = result.data;

    next();
  };
};