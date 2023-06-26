import { useLocation } from "react-router-dom"

function ProjectPage() {
  const { state } = useLocation()
  const { title="",description=<div></div>,images=[], github = "", web = "" } = state
  return (
    <>
      <div className="container flex flex-col p-8 mx-auto mb-12 space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-2xl font-bold underline">{title}</h2>
            <div className='mr-12 space-x-4'>
              <span className="text-xl">Links: </span>
              {web == "" ? null : <a href={web} className='text-xl fa fa-globe' target="_blank" rel="noopener noreferrer"></a>}
              {github == "" ? null : <a href={github} className='text-xl fa-brands fa-github' target="_blank" rel="noopener noreferrer"></a>}
            </div>
          </div>
          {description}
        </div>
        <div className="flex justify-around gap-2 overflow-auto h-96">
          {images.map((image, index) => 
            <img key={index} src={image} alt={"Project Image "+image} />
          )}
        </div>
      </div>
    </>
  )
}

export default ProjectPage