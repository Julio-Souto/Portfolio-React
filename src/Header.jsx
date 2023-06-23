import { useEffect, useState } from 'react'
import image from './assets/icons/react.svg'
import EmailButton from './components/EmailButton'
import TextTransition, { presets } from 'react-text-transition'

function Header() {
  const [texto, setTexto] = useState("Desarrollador Web Front-End")

  let bool = false
  const changeText = () => {
    if(bool){
      setTexto("Desarrollador de Software Multiplataforma")
      bool = false
    }
    else{
      setTexto("Desarrollador Web Front-End")
      bool=true
    }
  }
  
  useEffect(() => {
    const intervalId = setInterval(
      () => changeText(),
      5000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  
  return (
    <>
    <div className="flex flex-col p-4 lg:flex-row header-container bg-slate-700">
      <div className="m-auto mt-2 mb-4 lg:w-2/6 lg:my-auto">
        <img src={image} alt="image" className='object-cover w-20 ml-auto'/>
      </div>
      <div className="flex flex-col items-center space-y-3 text-center lg:w-4/6">
        <h1 className='text-5xl'>Julio Manuel Souto Baña</h1>
        <h3 className='text-3xl text-slate-400'><TextTransition springConfig={presets.wobbly}>{texto}</TextTransition></h3>
        <div className="flex items-center self-center space-x-4">
          <h5 className='text-xl'>Links:</h5>
          <div className='space-x-4'>
            <a href="" className="text-xl fa-brands fa-linkedin"></a>
            <EmailButton />
            <a href="" className='text-xl fa-brands fa-github'></a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header