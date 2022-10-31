import AlumnoModel from "../model/AlumnoModel.js";

export const ObtenerAlumno = async(req,res) =>{
    try {
        const alumnos = await AlumnoModel.findAll()
        res.json(alumnos)
    } catch (error) {
        res.json({message: error.message})
    }
}