import { DoctorList } from "../utils/constants.js";

export const getDoctorList = (req, res) => {
  try {
    const selectedCity = req.params.city;
    // console.log(selectedCity);
    const list = DoctorList.filter((doctor) => doctor.city === selectedCity);
    console.log(list);
    return res.status(200).json(list);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
