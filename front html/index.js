const api_url = "http://localhost:8000/alumnos";




fetch(`${api_url}/`).then((data)=>{
    return data.json()
}).then((objectData)=>{
    console.log(objectData)
    let tableData = ""
    objectData.map((alumno)=>{
        tableData += `<tr>
        <td>${alumno.id_alumno}</td>
        <td>${alumno.nombre}</td>
        <td>${alumno.rut}</td>
        <td>${alumno.email}</td>
         </tr>`
    })

    document.getElementById("table_body").innerHTML=tableData
})

