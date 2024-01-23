import express from "express";
import { getDoctorList } from "../controller/doctor-controller.js";

const route = express.Router();

route.get("/doctor/list/delhi", getDoctorList);

export default route;
