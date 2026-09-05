import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters")
    .optional(),

  avatar: z
    .string()
    .url("Avatar must be a valid URL")
    .optional(),
});