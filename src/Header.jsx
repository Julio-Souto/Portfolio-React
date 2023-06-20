import image from './assets/react.svg'

function Header() {
  return (
    <>
    <div className="flex w-screen p-4 header-container bg-slate-700">
      <div className="w-2/6 m-auto">
        <img src={image} alt="image" className='object-cover w-20 ml-auto'/>
      </div>
      <div className="flex flex-col w-4/6 space-y-3 text-center">
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