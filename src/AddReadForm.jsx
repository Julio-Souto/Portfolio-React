import { useEffect, useState } from 'react'
import { db } from './firebase'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp } from 'firebase/firestore'

// eslint-disable-next-line react/prop-types
function AddReadForm() {
  const [name, setName] = useState("experiencia")
  const [description, setDescription] = useState("descripcion")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [experiencias, setExperiencias] = useState([])

  const getter = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "prueba"));
      let copy = []
      querySnapshot.forEach((doc) => {
        copy.push({id:doc.id, name:doc.data().name, description:doc.data().description})
      });
      setExperiencias(copy)
      console.log(experiencias)
    } catch (error) {
      setError(error.message)
    }
  }
  useEffect(() => {
    getter()
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let name = e.target.name.value.trim()
    let description = e.target.description.value.trim()
      if(name !="" && description !=""){
        try {
          setLoading(true)
          const doc = await addDoc(collection(db,"prueba"),{name: name, description: description, createdAt: serverTimestamp()})
          console.log(doc.id)
          let copy = structuredClone(experiencias)
          copy.push({id:doc.id, name: name, description: description})
          setExperiencias(copy)
          setLoading(false)
          setError("")
        } catch (error) {
          setError(error.message)
          setLoading(false)
        }
      }
  }
  const deleteDocument = async (id) => {
    try {
      await deleteDoc(doc(db,"prueba",id))
      getter()
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <>
      <h2 className='mt-4 text-2xl font-bold text-center'>Experiencias</h2>
      <div className='flex gap-4 mx-auto'>
        <div className='space-y-4 login-container justify-stretch'>
          { error != "" ? <ErrorMessage error={error} /> : null }
          <form action="#" onSubmit={handleSubmit}>
            <fieldset className='flex flex-col p-4 space-y-4 text-left border-2 rounded-md w-96 border-slate-500'>
              <div className='flex flex-col space-y-2'>
                <label htmlFor="name">Nombre</label>
                <input className='p-2 rounded-md' type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
        
              <div className='flex flex-col space-y-2'>
                <label htmlFor="description">Descripcion</label>
                <input className='p-2 rounded-md' type="text" name='description' id='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
              </div>
              <button>Entrar</button>
            </fieldset>
          </form>
          { loading ? <LoadingSpinner /> : null }
        </div>
        <div className='mt-8'>
          <ul className='list-disc'>
            {experiencias != null ? experiencias.map((item) => 
              <li key={item.id} className='flex items-center'>{"• "+item.name+" - "+item.description}<button className='p-0 mt-1 ml-2 text-right outline-none bg-inherit' 
              onClick={() => deleteDocument(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
              </svg>
            </button></li>
            ) : <p></p>}
          </ul>
        </div>
      </div>
    </>
  )
}

export default AddReadForm
