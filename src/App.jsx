import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'

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
      <p>{login != null ? login.email : ""}</p>
    </>
  )
}

export default App
