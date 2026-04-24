import { useState } from "react";

function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");

  const agregarTarea = () => {
    if (input.trim() === "") return;

    setTareas([...tareas, input]);
    setInput("");
  };

  const eliminarTarea = () => {
    const nuevasTareas = tareas.slice(0, -1);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h2>Lista de tareas</h2>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nueva tarea" />
      <button onClick={agregarTarea}>Agregar</button>
      <button onClick={eliminarTarea}>Eliminar</button>
      <ul>
        {tareas.map((tarea) => (
          <li >
            {tarea}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tareas;