import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'
import Body from './Body'
import Footer from './Footer'

function App() {
  const [loggeado, setLoggeado] = useState(false)
  const [login, setLogin] = useState("")

  useEffect(() => {
    // if(localStorage.getItem('user') != "")
    //   setLogin(JSON.parse(localStorage.getItem('user')))
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(user)
        setLoggeado(true)
      }
    });
  }, [])

  const handleLogin = () => {
    signOut(auth)
      .then(() => {
        setLogin(null)
        setLoggeado(false)
        // localStorage.removeItem('user')
      })
      .catch((error) => {
        console.log(error.message)
      })

  }

  return (
    <>
      <button className='log-in-button' onClick={handleLogin}>{!loggeado ? <Link to='LoginForm'>Inicia Sesion</Link> : "Cerrar Sesion"}</button>
      <Header />
      {login != null ?
      <div className='mt-4 text-center'>
        <h2 className='text-2xl font-bold'>Bienvenido</h2>
        <p>{login.email}</p>
      </div> : null }
      <h2 className='mt-4 text-2xl font-bold text-center'>Proyectos</h2>
      <div className='flex justify-center mt-4'>
        <Body />
      </div>
      <Footer />
    </>
  )
}

export default App
