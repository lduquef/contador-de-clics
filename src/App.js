
import './App.css';
import logo from'./imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/contador'
import { useState } from 'react';

function App() {
  const [numClics,setNumClics] = useState(0);
  
  const manejarClic = ()=>{
    setNumClics( numClics+1);
    console.log('#Clic ',{numClics});
  }
  const reiniciarContador = () => {
    setNumClics(0)
    console.log('reiniciar contador')
  }
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img className='logo'
          src = {logo}
          alt='Logo'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}>

        </Contador>
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
          
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador }
        />
      </div>  
    </div>  
  );
}   
// hook funciones especiales que permite usar componetes funcionales 
// useState permite agregar un estado a un ocmponente funcional
export default App;
