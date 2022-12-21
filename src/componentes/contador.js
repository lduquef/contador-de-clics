import React from "react";
import '../style-sheets/contador.css'
// sintaxis de desestructuraciónn en lugar de usar props.numClics se  usa {nuClics}
function Contador({ numClics }){
  return(
  	<div className="contador">
			{numClics}
  	</div>
  )
}
export default Contador