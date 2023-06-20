import CardComponent from "./components/CardComponent"

function Body() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </>
  )
}

export default Body