import express  from "express";
import cors from 'cors'
import db from "./database/db.js";
import AlumnoRouter from './routes/routes.js'


const app = express()

app.use(cors())
app.use(express.json())
app.use('/alumnos',AlumnoRouter)

try {
    await db.authenticate()
    console.log('La conexion a la base de datos esta correcta')

} catch (error) {
    console.log(`Error de conexion:  ${error}`)
}

app.listen(8000,()=>{
    console.log('🚀  Corriendo en el puerto http://localhost:8000')
})