import { useState } from 'react';

export const Skills = ({ lista }) => {
  // Movemos el estado acá para cumplir con el TP
  const [mostrarSkills, setMostrarSkills] = useState(false);

  const manejarClick = () => {
    setMostrarSkills(!mostrarSkills);
  };

  return (
    <section>
      <h2>Mis Habilidades</h2>
      <button onClick={manejarClick}>
        {mostrarSkills ? "Ocultar tecnologías" : "Ver tecnologías"}
      </button>
      
      {/* Renderizado condicional */}
      {mostrarSkills && (
        <ul style={{ marginTop: '15px' }}>
          {lista.map((tecnologia, index) => (
            <li key={index}>{tecnologia}</li>
          ))}
        </ul>
      )}
    </section>
  )
}