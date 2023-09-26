import EmailButton from './components/EmailButton'
import 'font-awesome/css/font-awesome.css';
import '@fortawesome/fontawesome-free/css/brands.css'

function Header() {
  
  return (
    <>
    <div className="flex flex-col justify-center p-4 align-middle lg:flex-row ">
      {/* <div className="m-auto mt-2 mb-4 lg:w-2/6 lg:my-auto">
        <img src={image} alt="image" className='object-cover w-20 ml-auto'/>
      </div> */}
      <div className="flex flex-col items-center p-4 space-y-3 text-center rounded-lg lg:w-4/6 bg-[#111]">
        <h1 className='text-5xl'>Julio Manuel Souto Baña</h1>
        <div className=''>
          <h2 className='text-3xl text-slate-400'>Desarrollador de Software</h2>
        </div>
        <h3 className='text-xl'>Links:</h3>
        <div className="flex items-center self-center space-x-4">
          <div className='space-x-4 pt-1'>
            <a aria-label="Linkedin Link" href="https://www.linkedin.com/in/juliomanuelsouto/" target='_blank' rel="noopener noreferrer"  className="text-xl fa-brands fa-linkedin bg-slate-950 px-2 py-1 rounded-md"></a>
            <EmailButton />
            <a aria-label="Github Profile Link" href="https://github.com/Julio-Souto" target='_blank' rel="noopener noreferrer" className='text-xl fa-brands fa-github bg-slate-950 px-2 py-1 rounded-md'></a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header