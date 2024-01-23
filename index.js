import express from "express";

import cors from "cors";
import route from "./routes/route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.use("/doctor/list/:city", route);

const port = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is running at ${port}`);
});
