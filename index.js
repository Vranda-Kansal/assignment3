import express from "express";

import cors from "cors";
import route from "./routes/route.js";

const app = express();
app.use(cors());

app.use("/", route);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
