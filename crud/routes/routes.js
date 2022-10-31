import  express  from "express";
import { ObtenerAlumno } from "../controller/AlumnoController.js";

const router = express.Router()

router.get('/', ObtenerAlumno)

export default router