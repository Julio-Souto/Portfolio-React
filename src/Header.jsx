import image from './assets/react.svg'

function Header() {
  return (
    <>
    <div className="flex flex-col p-4 lg:flex-row lg:w-screen header-container bg-slate-700">
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
            <a href="" className='text-xl fa fa-globe'></a>
            <a href="" className='text-xl fa-brands fa-github'></a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header