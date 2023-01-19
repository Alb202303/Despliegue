function Info(){
    const info={
        codigo:1,
        nombre:"DAW",
        creditos:24,
        link:"https://www.comunidad.madrid/sites/default/files/doc/educacion/fp/FP-Ensenanza-IFCS03-LOE-Ficha.pdf"

    };
    return(
<>
<nav>
    <a href="/">Info del curso</a>
    <a href="registro">Registro</a>

</nav>


<h1>Info curso</h1>
<p>Código del curso: {info.codigo}</p>
<p>Nombre: {info.nombre}</p>
<p>Créditos del curso: {info.creditos}</p>
<p>Info del curso: <a href={info.link}>PDF</a></p>


</>


    )
}

export default Info;