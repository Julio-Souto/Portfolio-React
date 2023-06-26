import EmailButton from "./components/EmailButton"

function Footer() {
  return (
    <>
      <div className="absolute bottom-0 flex justify-between w-full p-4 footer bg-slate-700">
        <div className='space-x-4'>
          <a href="" className="text-xl fa-brands fa-linkedin"></a>
          <EmailButton footer={true} />
          <a href="" className='text-xl fa-brands fa-github'></a>
        </div>
        <div>
          <p className="font-bold">Julio Manuel Souto Baña</p>
        </div>
      </div>
    </>
  )
}

export default Footer