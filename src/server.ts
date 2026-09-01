import express from "express";
import "dotenv/config";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

const PORT = Number(process.env.PORT) || 3000;

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});