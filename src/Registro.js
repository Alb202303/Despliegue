import { useState } from "react";

function Registro(){
    const[infoSent, setSent]=useState(false);


    //Recoge los datos de cada input y los añade al localStorage        
    const submitHandler=(e)=> {
        e.preventDefault();
        const email=e.target.email.value;
        const tlf=e.target.tlf.value;

        if (infoSent){
            localStorage.setItem(email, tlf);
        }
    }
return(
<>
<nav>
    <a href="/">Info del curso</a>
    <a href="registro">Registro</a>

</nav>

<h1>Registro</h1>
<form onSubmit={submitHandler}>
    <label for="email">Email:</label>
    <input type="text" name="email" required></input>
    <label for="tlf">Teléfono:</label>
    <input type="text" name="tlf" required></input>
    <button onClick={()=>setSent(!infoSent)}>
    Enviar
    </button>
</form>

<p> {infoSent
                ? "¡Información Enviada!" //Si lo hemos enviado
                :"No se ha enviado la información" }</p>{/* //Si aún no está enviado}
 */}

</>

    );



}

export default Registro;