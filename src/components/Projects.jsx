export const Projects = ({ trabajos }) => {
  return (
    <section>
      <h2>Mis Proyectos</h2>
      <ul>
        {trabajos.map((proyecto) => (
          <li key={proyecto.id}>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}