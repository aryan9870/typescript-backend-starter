import type { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // TODO: validation will be handled by middleware
  // TODO: user creation will be handled by auth service

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: {
      name,
      email,
    },
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // TODO: validation will be handled by middleware
  // TODO: authentication logic will be handled by auth service

  res.status(200).json({
    success: true,
    message: "Login successful",
    data: {
      email,
    },
  });
};