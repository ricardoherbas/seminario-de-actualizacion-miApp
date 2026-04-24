import { useState } from "react";

function Texto () {
    const [texto, setTexto] = useState ("");

    return (
        <div>
            <input type="text" placeholder="Escribi algo ...." onChange={(e)=>setTexto(e.target.value)} />
            <p>{texto}</p>
        </div>
    )
}

export default Texto;