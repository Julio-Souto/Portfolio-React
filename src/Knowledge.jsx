import { android, angular, csharp, css, firebase, html, java, javascript, mysql, php, react, sqlite, unity, tailwind, typescript, npm } from './assets/icons'
import CardSmall from './components/CardSmall'

function Knowledge() {
  return (
    <>
      <div>
        <h2 className="mt-6 text-2xl font-bold text-center">Conocimientos</h2>
        <div className='flex justify-center mt-4'>
          <div className="grid grid-cols-2 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4">
            <CardSmall image={html} text="HTML" />
            <CardSmall image={css} text="CSS" />
            <CardSmall image={javascript} text="JavaScript" />
            <CardSmall image={react} text="React" />
            <CardSmall image={tailwind} text="TailwindCSS" />
            <CardSmall image={php} text="PHP" />
            <CardSmall image={mysql} text="MySQL" />
            <CardSmall image={firebase} text="Firebase" />
            <CardSmall image={typescript} text="TypeScrypt" />
            <CardSmall image={angular} text="Angular" />
            <CardSmall image={npm} text="NPM" />
            <CardSmall image={java} text="Java" />
            <CardSmall image={android} text="Android" />
            <CardSmall image={sqlite} text="SQLite" />
            <CardSmall image={csharp} text="C#" />
            <CardSmall image={unity} text="Unity" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Knowledge