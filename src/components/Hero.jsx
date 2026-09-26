export const Hero = ({ datos }) => {
  return (
    <section className="hero">
      {/* Asegurate de que el nombre del archivo coincida con el que pusiste en la carpeta public */}
      <img src="./public/perfil2.png" alt="Foto de perfil" className="foto-perfil" />
      
      <div className="hero-texto">
        <h1>{datos.nombre}</h1>
        <h2>{datos.titulo}</h2>
      </div>
    </section>
  )
}