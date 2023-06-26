import Grid from "animated-grid-lines"

// eslint-disable-next-line react/prop-types
function VideoComponent({onClick,image="http://placekitten.com/500/500"}) {
  return (
    <>
      <div className="container relative max-w-sm rounded shadow-lg max-h-96" onClick={onClick}>
      <Grid className="absolute z-10 grid-animation" gridColor="rgba(0,0,0,0)" autoFocus />
        <div className="flex items-center justify-center overflow-hidden rounded-t h-1/2 "> 
          <img className="min-w-full min-h-full " src={image} alt="Project Image"/>
        </div>
        <div className="px-6 py-4 h-1/2">
          <div className="mb-2 text-xl font-bold">{"title"}</div>
          <p className="text-base text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus ab nemo voluptatem animi, assumenda, placeat voluptas eius corrupti iure quisquam unde dicta ex nostrum ipsum eligendi? 
            {"description"}
          </p>
        </div>
      </div>
    </>
  )
}

export default VideoComponent