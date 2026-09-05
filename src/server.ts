import express from "express";
import "dotenv/config";
import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import { globalLimiter } from "./middlewares/rateLimit.middleware.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(globalLimiter);

app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

const PORT = Number(process.env.PORT) || 3000;

app.use("/api", routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});