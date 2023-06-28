import { useEffect, useRef, useState } from 'react'
import image from './assets/icons/react.svg'
import EmailButton from './components/EmailButton'
// import TextTransition, { presets } from 'react-text-transition'

function Header() {
  const [texto, setTexto] = useState("Desarrollador Web Front-End")
  const transition = useRef()

  let bool = false
  const changeText = () => {
    if(bool){
      const span = transition.current
      span.className = "text-3xl text-slate-400 text-fade"
      setTimeout(() => {
        setTexto("Desarrollador Web Front-End")
        const span = transition.current
        span.className = "text-3xl text-slate-400 text-show"
      },1000)
      bool = false
    }
    else{
      const span = transition.current
      span.className = "text-3xl text-slate-400 text-fade"
      setTimeout(() => {
        setTexto("Desarrollador de Software Multiplataforma")
        const span = transition.current
        span.className = "text-3xl text-slate-400 text-show"
      },1000)
      bool=true
    }
  }
  
  useEffect(() => {
    const intervalId = setInterval(
      () => changeText(),
      7000,
    );
    return () => clearTimeout(intervalId);
  }, []);
  
  return (
    <>
    <div className="flex flex-col p-4 lg:flex-row bg-slate-700">
      <div className="m-auto mt-2 mb-4 lg:w-2/6 lg:my-auto">
        <img src={image} alt="image" className='object-cover w-20 ml-auto'/>
      </div>
      <div className="flex flex-col items-center space-y-3 text-center lg:w-4/6">
        <h1 className='text-5xl'>Julio Manuel Souto Baña</h1>
        <div className=''>
          <h3 className='text-3xl text-slate-400' ref={transition}>{texto}</h3>
        </div>
        <div className="flex items-center self-center space-x-4">
          <h5 className='text-xl'>Links:</h5>
          <div className='space-x-4'>
            <a href="https://www.linkedin.com/in/juliomanuelsouto/" target='_blank' rel="noopener noreferrer"  className="text-xl fa-brands fa-linkedin"></a>
            <EmailButton />
            <a href="https://github.com/Julio-Souto" target='_blank' rel="noopener noreferrer" className='text-xl fa-brands fa-github'></a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header