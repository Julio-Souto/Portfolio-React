import { useNavigate } from "react-router-dom"
import CardComponent from "./components/CardComponent"
import android1 from './assets/images/reproductorandroid1.png'
import android2 from './assets/images/reproductorandroid2.png'
import android3 from './assets/images/reproductorandroid3.png'

function Body() {
  const navigate = useNavigate()
  return (
    <>
      <h2 className='mt-4 text-2xl font-bold text-center'>Proyectos</h2>
      <div className='flex justify-center mt-4'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CardComponent image={android3} androidb={null} javab={null} sqliteb={null} onClick={
            () => { 
              navigate("/PaginaProyecto", {state: { title:"App Reproductor Android", description:
                <div className="container space-y-4"> 
                  <p>O proxecto consiste nun reprodutor de música en Android. A aplicación permite ao usuario:</p>
                  <ul className="ml-4 list-disc">
                    <li>Reproducir cancións que teña no seu dispositivo, nas carpetas que se especifiquen.</li>
                    <li>Reproducir as cancións en orde aleatorio e en bucle.</li>
                    <li>Ordear as cancións por título, artista, álbum e data.</li>
                    <li>Mostrar as cancións agrupadas por artista, álbum e data.</li>
                    <li>Crear e manexar listas de reproducción.</li>
                    <li>Buscar cancións mediante un buscador.</li>
                    <li>Descargar cancións para reproducilas.</li>
                    <li>Editar a información das cancións.</li>
                  </ul>
                  <p>En canto ao funcionamento, a aplicación gardará a información máis relevante de cada canción nunha base de datos no momento no que o usuario selecciona unha carpeta con cancións.</p>
                  <p>Esta información será: Título, Artista, Álbum, Data, Duración, Imaxe e Ruta.</p>
                  <p>A información usarase según sexa necesario na aplicación. Os artistas, álbums e imaxes das cancións que non se poidan ler gardaranse na base de datos como “Desconocido”.</p>
                </div>,
               images:[android1,android2,android3], github:"https://github.com/Julio-Souto/Reproductor-Android" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null}/>
          <CardComponent androidb={null} cssb={null} angularb={null} firebaseb={null} htmlb={null} javab={null} javascriptb={null} mysqlb={null} tailwindb={null} typescriptb={null} csharpb={null} unityb={null} sqliteb={null} reactb={null} phpb={null} />
          <CardComponent htmlb={null} cssb={null} javascriptb={null}/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null}/>
          <CardComponent csharpb={null} unityb={null} sqliteb={null} />
        </div>
      </div>
    </>
  )
}

export default Body