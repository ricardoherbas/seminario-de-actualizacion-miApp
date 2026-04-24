import { useState } from "react";

function Mensaje() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}> Boton {mostrar ? "Ocultar" : "Mostrar"}</button>
        {mostrar && <p>Mensaje oculto</p>}
    </div>
  );
}

export default Mensaje;