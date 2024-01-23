import express from "express";

import cors from "cors";
import route from "./routes/route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

app.get("/doctor/list/:city", (req, res) => {
  try {
    const selectedCity = req.params.city;
    // console.log(selectedCity);
    const list = DoctorList.filter((doctor) => doctor.city === selectedCity);
    console.log(list);
    return res.status(200).json(list);
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

const port = 8001;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
