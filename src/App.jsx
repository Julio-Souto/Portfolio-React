import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Footer from './Footer'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

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

  return (
    <>
      <Nav loggeado={loggeado} setLog={() => {setLoggeado(false); setLogin(null)}}/>
      <div className='flex flex-col'>
        <Header />
        {login != null ?
        <div className='mt-4 text-center'>
          <h2 className='text-2xl font-bold'>Bienvenido</h2>
          <p>{login.email}</p>
        </div> : null }
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
