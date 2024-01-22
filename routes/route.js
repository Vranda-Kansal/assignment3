import express from "express";
import { getDoctorList } from "../controller/doctor-controller.js";

const route = express.Router();

route.get("/doctor/list/:city", getDoctorList);

export default route;
