import express from "express";

import cors from "cors";
import route from "./routes/route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.use("/", route);

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

const port = 8001;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
