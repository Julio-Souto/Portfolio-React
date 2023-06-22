import android from '../assets/icons/android-original-wordmark.svg'
import angular from '../assets/icons/angularjs-original-wordmark.svg'
import csharp from '../assets/icons/csharp-original.svg'
import css from '../assets/icons/css3-original-wordmark.svg'
import firebase from '../assets/icons/firebase-plain-wordmark.svg'
import html from '../assets/icons/html5-original-wordmark.svg'
import java from '../assets/icons/java-original-wordmark.svg'
import javascript from '../assets/icons/javascript-original.svg'
import mysql from '../assets/icons/mysql-original-wordmark.svg'
import php from '../assets/icons/php-original.svg'
import react from '../assets/icons/react-original-wordmark.svg'
import sqlite from '../assets/icons/sqlite-original-wordmark.svg'
import unity from '../assets/icons/unity-original-wordmark.svg'
import tailwind from '../assets/icons/tailwindcss-original-wordmark.svg'
import typescript from '../assets/icons/typescript-original.svg'

// eslint-disable-next-line react/prop-types
function CardComponent({image = "http://placekitten.com/500/500", title = "Title", description = "Description", onClick, androidb = false, angularb = false, csharpb = false, cssb = false, firebaseb = false, htmlb = false, javab = false, javascriptb = false, mysqlb = false, sqliteb = false, unityb = false, tailwindb = false, typescriptb = false, reactb = false, phpb = false }) {
  return (
    <>
      <div className="container relative max-w-sm rounded shadow-lg group max-h-96" onClick={onClick}>
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
        <div className="absolute flex flex-col justify-between w-5/6 opacity-0 h-5/6 top-3 left-4 group-hover:opacity-100">
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