import { android, angular, csharp, css, firebase, html, java, javascript, mysql, php, react, sqlite, unity, tailwind, npm, rest } from '../assets/icons'
import CardSmall from '../components/CardSmall'

function Knowledge() {
  return (
    <>
      <div>
        <h2 className="mt-6 text-4xl font-bold text-center">Perfil</h2>
        <div className='w-full flex justify-around flex-col lg:flex-row p-4'>
          <div className='bg-black rounded-lg w-full lg:w-[45%] p-6 flex items-start space-x-4'>
            <div className='pt-2 text-green-600'><i className="fa-solid fa-mobile-screen fa-2xl text-6xl"></i></div>
            <div>
              <h3 className='text-2xl font-bold'>Desarrollador de Aplicaciones Multiplataforma</h3>
              <p className='pt-1'>Tras graduarme en la FP Superior de Desarrollo de Aplicaciones Multiplataforma aprendí a:</p>
              <ul className='marker:text-green-600 list-outside list-disc space-y-1 pt-1'>
                <li>Programar en profundidad con Java usando Apache Ant, Maven y Gradle.</li>
                <li>Diseñar interfaces gráficas usando Java Swing y JavaFX.</li>
                <li>Manejar bases de datos de manera avanzada, tanto relacionales como no relacionales, sobre todo con MySQL y SQLite.</li>
                <li>Utilizar Python a nivel básico para la creación de módulos ERP con Odoo.</li>
                <li>Programar en dispositivos Android con Java.</li>
                <li>Como Trabajo Fin de Ciclo cree un <a href="https://github.com/Julio-Souto/Reproductor-Android" target='_blank' rel="noopener noreferrer">Reproductor de Música en Android</a> en el que realizo:
                  <ul className='marker:text-[#646cff] list-outside list-disc space-y-2 pt-2'>
                    <li>Lectura de archivos locales y metadatos usando SQLite como almacenamiento.</li>
                    <li>Manejo de listas de datos y notificaciones personalizadas.</li>
                    <li>Reproducción de canciones por orden y agrupación y manejo de listas de reproducción propias.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className='bg-black rounded-lg w-full mt-6 lg:mt-0 lg:w-[45%] p-6 flex items-start space-x-4'>
            <div className='pt-2 text-blue-400'><i className="fa-brands fa-react fa-2xl text-6xl"></i></div>
            <div>
              <h3 className='text-2xl font-bold'>Desarrollador Web Fullstack</h3>
              <p className='pt-1'>Después de realizar una AFD de Desarrollo de Aplicaciones Web y adquirire el Certificado de Profesionalidad de nivel 3 aprendí a:</p>
              <ul className='marker:text-cyan-500 list-outside list-disc space-y-1 pt-1'>
                <li>Utilizar HTML, CSS y JavasCript de forma avanzada.</li>
                <li>Utilizar Node.js y NPM para la creación de los entornos de los proyectos.</li>
                <li>Usar PHP para la gestón de formularios y peticiones a servidores.</li>
                <li>Expandí mis conocimientos de MySQL y aprendí a integrar Bases de Datos en Páginas Web.</li>
                <li>Realizar peticiones a servidores remotos haciendo Fetching de datos a APIs y a procesar los datos en mis propias páginas.</li>
                <li>Utilizar React y Tailwind y a utilizar la estructura de archivos por componentes para proyectos más avanzados.</li>
                <li>Como Trabajo de Fin de Curso realicé este Portfolio usando todo lo aprendido y mientras aprendía a utilizar React Router y Firebase.</li>
              </ul>
            </div>
          </div>
        </div>
        <h2 className="mt-6 text-4xl font-bold text-center">Conocimientos</h2>
        <div className='flex justify-center mt-4 mb-4'>
          <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <CardSmall image={html} text="HTML" />
            <CardSmall image={css} text="CSS" />
            <CardSmall image={javascript} text="JavaScript" />
            <CardSmall image={rest} text="Rest API" />
            <CardSmall image={react} text="React" />
            <CardSmall image={tailwind} text="TailwindCSS" />
            <CardSmall image={php} text="PHP" />
            <CardSmall image={mysql} text="MySQL" />
            <CardSmall image={firebase} text="Firebase" />
            {/* <CardSmall image={typescript} text="TypeScrypt" /> */}
            <CardSmall image={angular} text="Angular" />
            <CardSmall image={npm} text="NPM" />
            <CardSmall image={java} text="Java" />
            <CardSmall image={android} text="Android" />
            <CardSmall image={sqlite} text="SQLite" />
            <CardSmall image={csharp} text="C#" />
            <CardSmall image={unity} text="Unity" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Knowledge