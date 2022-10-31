import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import "sweetalert2/dist/sweetalert2.css";
import Swal from "sweetalert2";

const URL = "http://localhost:8000/alumnos/";

const MostarAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  useEffect(() => {
    getAlumnos();
  }, []);

  const getAlumnos = async () => {
    const res = await axios.get(URL);
    setAlumnos(res.data);
  };

  return (
    <>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>R.U.T</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Fecha de Creación</th>
            <th>Fecha de Actualización</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id_alumno}>
              <td>{alumno.id_alumno}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.rut}</td>
              <td>{alumno.email}</td>
              <td>{alumno.createdAt}</td>
              <td>{alumno.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default MostarAlumnos
