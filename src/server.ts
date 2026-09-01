import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});