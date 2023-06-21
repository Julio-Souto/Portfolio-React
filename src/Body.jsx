import CardComponent from "./components/CardComponent"

function Body() {
  return (
    <>
      <h2 className='mt-4 text-2xl font-bold text-center'>Proyectos</h2>
      <div className='flex justify-center mt-4'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CardComponent htmlb={null} cssb={null} javascriptb={null}/>
          <CardComponent htmlb={null} cssb={null} javascriptb={null}/>
          <CardComponent csharpb={null} unityb={null} sqliteb={null} />
        </div>
      </div>
    </>
  )
}

export default Body