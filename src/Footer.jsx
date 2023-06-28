import EmailButton from "./components/EmailButton"

function Footer() {
  return (
    <>
      <div className="absolute bottom-0 flex justify-between w-full p-4 bg-slate-700">
        <div className='space-x-4'>
          <a href="https://www.linkedin.com/in/juliomanuelsouto/" target='_blank' rel="noopener noreferrer"  className="text-xl fa-brands fa-linkedin"></a>
          <EmailButton footer={true} />
          <a href="https://github.com/Julio-Souto" target='_blank' rel="noopener noreferrer" className='text-xl fa-brands fa-github'></a>
        </div>
        <div>
          <p className="font-bold">Julio Manuel Souto Baña</p>
        </div>
      </div>
    </>
  )
}

export default Footer