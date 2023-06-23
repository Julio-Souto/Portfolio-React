import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from './assets/icons/react.svg'

function Header() {
  return (
    <>
    <div className="flex flex-col p-4 lg:flex-row header-container bg-slate-700">
      <div className="m-auto mt-2 mb-4 lg:w-2/6 lg:my-auto">
        <img src={image} alt="image" className='object-cover w-20 ml-auto'/>
      </div>
      <div className="flex flex-col space-y-3 text-center lg:w-4/6">
        <h1 className='text-5xl'>Title</h1>
        <h3 className='text-3xl text-slate-400'>Subtitle</h3>
        <div className="flex items-center self-center space-x-4">
          <h5 className='text-xl'>Links:</h5>
          <div className='space-x-4'>
            <a href="" className="text-xl fa-brands fa-linkedin"></a>
            <div className='relative inline-block group'>
              <a href="mailto: julio.souto.zas@gmail.com" className='text-xl fa-solid fa-envelope tooltip'
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText("julio.souto.zas@gmail.com");
                toast.success("Copiado al portapapeles")
              }}></a>
              <span className="absolute p-2 m-4 mx-auto text-sm text-gray-100 transition-opacity -translate-x-1/2 bg-gray-800 rounded-md opacity-0 bottom-2 group-hover:opacity-100 left-1/2">julio.souto.zas@gmail.com</span>
            </div>
            <a href="" className='text-xl fa-brands fa-github'></a>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer position="bottom-center" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </>
  )
}

export default Header