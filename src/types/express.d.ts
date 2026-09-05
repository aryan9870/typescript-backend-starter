declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        name: string;
        email: string;
        avatar: string | null;
        role: "USER" | "ADMIN";
      };
    }
  }
}

export {};