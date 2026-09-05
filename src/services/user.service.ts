import { prisma } from "../config/prisma.js";

export const updateUserProfile = async (
  userId: number,
  data: {
    name?: string;
    avatar?: string;
  }
) => {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};