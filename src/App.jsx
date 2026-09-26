import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

function App() {
  const usuario = {
    nombre: "Exequiel Medina",
    titulo: "Tecnico en traductorado de Inglés",
    titulo: "Estudiante de Programación - UTN",
    experiencia: "Closer de ventas en Riders Miami (2025 - actualidad)."
  };

  const tecnologias = ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Base de Datos"];

  // Acá actualizamos la lista de proyectos sacando el portfolio y agregando dos ficticios
  const proyectos = [
    { id: 1, titulo: "Exeparfumerie", descripcion: "Página web desarrollada para una perfumería local." },
    { id: 2, titulo: "Gestor de Tareas (To-Do List)", descripcion: "Aplicación web para organizar, agregar y marcar tareas diarias completadas." },
    { id: 3, titulo: "Calculadora de Presupuesto", descripcion: "Herramienta interactiva para llevar el control de gastos e ingresos mensuales." }
  ];

  return (
    <div>
      <Header />
      <Hero datos={usuario} />
      <About experiencia={usuario.experiencia} />
      <Skills lista={tecnologias} />
      <Projects trabajos={proyectos} />
      <Footer />
    </div>
  )
}

export default App