import db from "../database/db.js";
import { DataTypes } from "sequelize";

const AlumnoModel = db.define('alumnos',{
    id_alumno:{type: DataTypes.INTEGER, primaryKey:true},
    nombre:{type:DataTypes.STRING},
    rut:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING}
})

export default AlumnoModel

