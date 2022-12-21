import React from "react";
// texto y esBotonDeClics son props , manejarClic es un props como función
function Boton({texto , esBotonDeClic,manejarClic}) {
    return(
        <button
        className={esBotonDeClic ?  'boton-clic':'boton-reiniciar'}
              onClick = {manejarClic}>
            {texto} 
        </button>
    )
};
export default Boton
