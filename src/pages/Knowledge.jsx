import { android, angular, csharp, css, firebase, html, java, javascript, mysql, php, react, sqlite, unity, tailwind, npm, rest } from '../assets/icons'
import CardSmall from '../components/CardSmall'

function Knowledge() {
  return (
    <>
      <div>
        <h2 className="mt-6 text-4xl font-bold text-center">Perfil</h2>
        <div className='w-full flex justify-around flex-col lg:flex-row p-4'>
          <div className='bg-[#111] rounded-lg w-full lg:w-[45%] p-6 flex items-start space-x-4'>
            <div className='pt-2 text-green-600'><i className="fa-solid fa-mobile-screen fa-2xl text-6xl"></i></div>
            <div>
              <h3 className='text-2xl font-bold'>Desarrollador de Aplicaciones Multiplataforma</h3>
              <p className='pt-1'>Graduado en Desarrollo de Aplicaciones Multiplataforma con conocimientos avanzados de Java, SQL y Android.</p>
              <p className='pt-1'>Aprendí a programar y diseñar interfaces gráficas usando Java Swing y JavaFX.</p>
              <p className='pt-1'>Adquirí conocimientos en bases de datos, tanto relacionales como no relacionales, sobre todo en MySQL y SQLite.</p>
              <p className='pt-1'>Aprendí a programar con Python a nivel básico para la creación de módulos ERP con Odoo.</p>
              <p className='pt-1'>Aprendí a programar en dispositivos Android con Java.</p>
              <p className='pt-1'>Trabajo Fin de Ciclo: <a href="https://github.com/Julio-Souto/Reproductor-Android" target='_blank' rel="noopener noreferrer">App de Reproductor de Música en Android</a></p>
              <ul className='pt-1'>
                <li>Lectura de archivos locales y metadatos usando SQLite como almacenamiento.</li>
                <li>Manejo de listas de datos y notificaciones personalizadas.</li>
                <li>Reproducción de canciones por orden y agrupación y manejo de listas de reproducción propias.</li>
              </ul>
            </div>
          </div>
          <div className='bg-[#111] rounded-lg w-full mt-6 lg:mt-0 lg:w-[45%] p-6 flex items-start space-x-4'>
            <div className='pt-2 text-blue-400'><i className="fa-brands fa-react fa-2xl text-6xl"></i></div>
            <div>
              <h3 className='text-2xl font-bold'>Desarrollador Web Fullstack</h3>
              <p className='pt-1'>Después de realizar una AFD de Desarrollo de Aplicaciones Web aprendí a utilizar HTML, CSS y JavasCript de forma avanzada.</p>
              <p className='pt-1'>Aprendí a utilizar Node.js y NPM para la creación de los entornos de los proyectos.</p>
              <p className='pt-1'>Aprendí a utilizar PHP para la gestón de formularios y peticiones a servidores.</p>
              <p className='pt-1'>Expandí mis conocimientos de MySQL y aprendí a integrar Bases de Datos en Páginas Web.</p>
              <p className='pt-1'>Aprendí a realizar peticiones a servidores remotos haciendo Fetching de datos a APIs y a procesar los datos en mis propias páginas.</p>
              <p className='pt-1'>Aprendí a utilizar React y Tailwind y a utilizar la estructura de archivos por componentes para proyectos más avanzados.</p>
              <p className='pt-1'>Como Trabajo de Fin de Curso realicé este Portfolio usando todo lo aprendido y mientras aprendía a utilizar React Router y Firebase.</p>
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