
// eslint-disable-next-line react/prop-types
function CardComponent({image = "http://placekitten.com/200/300", title = "Title", description = "Description"}) {
  return (
    <>
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img
          className="w-full"
          src={image}
          alt="Project Image"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-base text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

export default CardComponent