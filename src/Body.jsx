import { useNavigate } from "react-router-dom"
import CardComponent from "./components/CardComponent"
import {android1, android2, android3, articlepreview1, articlepreview2, productpreview1, productpreview2, introcomponent1, introcomponent2, introsection, qrcomponent1, qrcomponent2, ratingcomponent1, ratingcomponent2, moviesapisearch1, moviesapisearch2, moviesapisearch3, jsregexp} from './assets/images'
import VideoComponent from "./components/VideoComponent"

function Body() {
  const navigate = useNavigate()
  return (
    <>
      <h2 className='mt-6 text-2xl font-bold text-center'>Proyectos</h2>
      <div className='flex justify-center my-4 mb-6'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CardComponent image={android3} title="Reproductor de Música en Android" description="Aplicacion de Android que permite reproducir archivos locales de música y gestionar listas de reproducción" androidb={null} javab={null} sqliteb={null} 
          github="https://github.com/Julio-Souto/Reproductor-Android" onClick={
            () => { 
              navigate("/PaginaProyecto", {state: { title:"Reproductor de Música en Android", description:
                `
                  <p>La aplicación consiste en un reproductor de música que reproduce archivos existentes en el dispositivo y permite descargar canciones a partir de una URL. Todas las funcionalidades de la aplicación son:</p>
                  <ul>
                    <li>Reproducir canciones existentes en el dispositivo, en las carpetas especificadas por el usuario.</li>
                    <li>Reproducir canciones en orden aleatorio y en bucle.</li>
                    <li>Crear y editar listas de reproducción.</li>
                    <li>Buscar canciones ya existentes en la aplicación.</li>
                    <li>Mostrar listas de canciones ordenadas por título, artista, álbum y fecha.</li>
                    <li>Mostrar listas de canciones agrupadas por artista, álbum y fecha.</li>
                    <li>Editar la información guardada de las canciones.</li>
                    <li>Descargar canciones con una URL y reproducirlas.</li>
                  </ul>
                `,
               images:[android1,android2,android3], github:"https://github.com/Julio-Souto/Reproductor-Android" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} image={productpreview1} title="Diseño de un Componente Producto" description="Vista previa del diseño de un Componente Producto adaptable" web="https://julio-souto.github.io/product-preview/" github="https://github.com/Julio-Souto/product-preview" onClick={
            () => { 
              navigate("/PaginaProyecto", {state: { title:"Diseño de un Componente Producto", description:
                `
                  <p>Vista previa del diseño de un Componente Producto adaptable hecho a partir de un desafio de FrontEnd Mentor usando solo HTML y CSS puros</p>
                `,
               images:[productpreview1,productpreview2], web:"https://julio-souto.github.io/product-preview/", github:"https://github.com/Julio-Souto/product-preview" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} image={articlepreview1} title="Diseño de un Componente Artículo" description="Vista previa del diseño de un Componente Artículo adaptable" web="https://julio-souto.github.io/article-preview/" github="https://github.com/Julio-Souto/article-preview" onClick={
            () => { 
              navigate("/PaginaProyecto", {state: { title:"Diseño de un Componente Artículo", description:
                `
                  <p>Vista previa del diseño de un Componente Artículo adaptable hecho a partir de un desafio de FrontEnd Mentor usando solo HTML y CSS puros</p>
                `,
               images:[articlepreview1,articlepreview2], web:"https://julio-souto.github.io/article-preview/", github:"https://github.com/Julio-Souto/article-preview" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} image={introcomponent1} title="Diseño de una Página de Registro" description="Vista previa del diseño de una Página de Registro adaptable" web="https://julio-souto.github.io/intro-component/" github="https://github.com/Julio-Souto/intro-component" onClick={
            () => { 
              navigate("/PaginaProyecto", {state: { title:"Diseño de una Página de Registro", description:
                `
                  <p>Vista previa del diseño de una Página de Registro adaptable hecha a partir de un desafio de FrontEnd Mentor usando solo HTML y CSS puros</p>
                `,
               images:[introcomponent1,introcomponent2], web:"https://julio-souto.github.io/intro-component/", github:"https://github.com/Julio-Souto/intro-component" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} image={introsection} title="Diseño de una Página de Inicio" description="Vista previa del diseño de una Página de Inicio" web="https://julio-souto.github.io/intro-section/" github="https://github.com/Julio-Souto/intro-section" onClick={
            () => { 
              navigate("/PaginaProyecto", {state: { title:"Diseño de una Página de Inicio", description:
                `
                  <p>Vista previa del diseño de una Página de Inicio hecha a partir de un desafio de FrontEnd Mentor usando solo HTML y CSS puros</p>
                `,
               images:[introsection], web:"https://julio-souto.github.io/intro-section/", github:"https://github.com/Julio-Souto/intro-section" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} image={qrcomponent1} title="Diseño de un Componente QR" description="Vista previa del diseño de un Componente QR adaptable" web="https://julio-souto.github.io/julio-souto-qr/" github="https://github.com/Julio-Souto/julio-souto-qr" onClick={
            () => { 
              navigate("/PaginaProyecto", {state: { title:"Diseño de un Componente QR", description:
                `
                  <p>Vista previa del diseño de un Componente QR adaptable hecho a partir de un desafio de FrontEnd Mentor usando solo HTML y CSS puros</p>
                `,
               images:[qrcomponent1,qrcomponent2], web:"https://julio-souto.github.io/julio-souto-qr/", github:"https://github.com/Julio-Souto/julio-souto-qr" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null} image={ratingcomponent1} title="Diseño de un Componente de Calificación" description="Vista previa del diseño de un Componente de Calificación adaptable" web="https://julio-souto.github.io/interactive-rating-component/" github="https://github.com/Julio-Souto/interactive-rating-component" onClick={
            () => { 
              navigate("/PaginaProyecto", {state: { title:"Diseño de un Componente de Calificación", description:
                `
                  <p>Vista previa del diseño de un Componente de Calificación adaptable hecho a partir de un desafio de FrontEnd Mentor usando solo HTML, CSS y Javascript puros</p>
                `,
               images:[ratingcomponent1,ratingcomponent2], web:"https://julio-souto.github.io/interactive-rating-component/", github:"https://github.com/Julio-Souto/interactive-rating-component" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null} image={jsregexp} title="Validación de formularios con expresiones regulares" description="Validación de campos de un formulario usando expresiones regulares" web="https://julio-souto.github.io/Javascript-ExpresionesRegulares/" github="https://github.com/Julio-Souto/Javascript-ExpresionesRegulares" onClick={
            () => { 
              navigate("/PaginaProyecto", {state: { title:"Validación de formularios con expresiones regulares", description:
                `
                  <p>Página de prueba para la validación de formularios usando expresiones regulares y HTML, CSS y Javascript puros</p>
                `,
               images:[jsregexp], web:"https://julio-souto.github.io/Javascript-ExpresionesRegulares/", github:"https://github.com/Julio-Souto/Javascript-ExpresionesRegulares" }
              })
             }
          }/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null} restb={null} image={moviesapisearch2} title="Buscador de películas usando una API" description="Buscador de películas adaptable usando la OMDB API" web="https://julio-souto.github.io/-Movies-API-Search-Dist/" github="https://github.com/Julio-Souto/Movies-API-Search" onClick={
            () => { 
              navigate("/PaginaProyecto", {state: { title:"Buscador de películas usando una API", description:
                `
                  <p>Buscador de películas adaptable haciendo fetching de datos a la API de OMDB con paginación, usando HTML, CSS y Javascript puros</p>
                `,
               images:[moviesapisearch1,moviesapisearch2,moviesapisearch3], web:"https://julio-souto.github.io/-Movies-API-Search-Dist/", github:"https://github.com/Julio-Souto/Movies-API-Search" }
              })
             }
          }/>
          <CardComponent androidb={null} cssb={null} angularb={null} firebaseb={null} htmlb={null} javab={null} javascriptb={null} mysqlb={null} tailwindb={null} typescriptb={null} csharpb={null} unityb={null} sqliteb={null} reactb={null} phpb={null} />
          <CardComponent htmlb={null} cssb={null} javascriptb={null}/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null}/>
          <CardComponent csharpb={null} unityb={null} sqliteb={null} />
          <VideoComponent onClick={() => {navigate("/PaginaVideo")}}/>
        </div>
      </div>
    </>
  )
}

export default Body