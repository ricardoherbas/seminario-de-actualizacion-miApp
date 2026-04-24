import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Titulo from "./components/Titulo";
import Bienvenida from "./components/Bienvenida";
import Lista from "./components/Lista";
import Contador from './components/Contador';
import Texto from './components/Texto';
import Tareas from './components/Tareas';
import Mensaje from './components/Mensaje';

function App() {

  return (
    <>
      <section id="center">
        <Titulo />
        <Bienvenida nombre="Ricardo" />
        <Lista />
        <Contador/>
        <Texto/>
        <Tareas/>
        <Mensaje/>
      </section>      
    </>
  )
}

export default App
