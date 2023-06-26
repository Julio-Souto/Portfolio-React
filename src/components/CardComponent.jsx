import { android, angular, csharp, css, firebase, html, java, javascript, mysql, php, react, sqlite, unity, tailwind, typescript } from '../assets/icons'

// eslint-disable-next-line react/prop-types
function CardComponent({image = "http://placekitten.com/500/500", title = "Title", description = "Description", onClick, androidb = false, angularb = false, csharpb = false, cssb = false, firebaseb = false, htmlb = false, javab = false, javascriptb = false, mysqlb = false, sqliteb = false, unityb = false, tailwindb = false, typescriptb = false, reactb = false, phpb = false }) {
  return (
    <>
      <div className="container relative max-w-sm rounded-lg shadow-lg bg-slate-800 group max-h-96" onClick={onClick}>
        <div className="flex items-center justify-center overflow-hidden rounded-t h-1/2 group-hover:opacity-10"> 
          <img className="min-w-full min-h-full " src={image} alt="Project Image"/>
        </div>
        <div className="px-6 py-4 h-1/2 group-hover:opacity-10">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-base text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus ab nemo voluptatem animi, assumenda, placeat voluptas eius corrupti iure quisquam unde dicta ex nostrum ipsum eligendi? 
            {description}
          </p>
        </div>
        <div className="absolute flex flex-col justify-between w-5/6 opacity-0 h-5/6 top-3 left-4 group-hover:opacity-100 group-hover:cursor-grab">
          <div className='space-y-3 text-white'>
            <p className='text-xl'>Usando:</p>
            <div className="flex flex-wrap items-center justify-start gap-4">
             {htmlb ?? <img className='w-10 h-10' src={html} alt="icon" /> }
             {cssb ?? <img className='w-10 h-10' src={css} alt="icon" /> }
             {tailwindb ?? <img className='w-10 h-10' src={tailwind} alt="icon" /> }
             {androidb ?? <img className='w-10 h-10' src={android} alt="icon" /> }
             {angularb ?? <img className='w-10 h-10' src={angular} alt="icon" /> }
             {csharpb ?? <img className='w-10 h-10' src={csharp} alt="icon" /> }
             {firebaseb ?? <img className='w-10 h-10' src={firebase} alt="icon" /> }
             {javab ?? <img className='w-10 h-10' src={java} alt="icon" /> }
             {javascriptb ?? <img className='w-10 h-10' src={javascript} alt="icon" /> }
             {reactb ?? <img className='w-10 h-10' src={react} alt="icon" /> }
             {phpb ?? <img className='w-10 h-10' src={php} alt="icon" /> }
             {unityb ?? <img className='w-10 h-10' src={unity} alt="icon" /> }
             {mysqlb ?? <img className='w-10 h-10' src={mysql} alt="icon" /> }
             {sqliteb ?? <img className='w-10 h-10' src={sqlite} alt="icon" /> }
             {typescriptb ?? <img className='w-10 h-10' src={typescript} alt="icon" /> }
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <p className='text-xl'>Links:</p>
            <div className='space-x-4'>
              <a href="" className='text-xl fa fa-globe'></a>
              <a href="" className='text-xl fa-brands fa-github'></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardComponent