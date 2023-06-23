import { android, angular, csharp, css, firebase, html, java, javascript, mysql, php, react, sqlite, unity, tailwind, typescript } from './assets/icons'
import CardSmall from './components/CardSmall'

function Knowledge() {
  return (
    <>
      <div>
        <h2 className="mt-4 text-2xl font-bold text-center">Conocimientos</h2>
        <div className='flex justify-center mt-4'>
          <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4">
            <CardSmall image={android} text="Android" />
            <CardSmall image={angular} text="Angular" />
            <CardSmall image={csharp} text="C#" />
            <CardSmall image={css} text="CSS" />
            <CardSmall image={firebase} text="Firebase" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Knowledge