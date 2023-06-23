import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Footer from './Footer'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
// import { _getDocs } from './cloud-firestore'
import { MouseTrail } from '@stichiboi/react-elegant-mouse-trail'

function App() {
  const [loggeado, setLoggeado] = useState(false)
  const [login, setLogin] = useState(null)

  // _getDocs("prueba")
  useEffect(() => {
    // if(localStorage.getItem('user') != "")
    //   setLogin(JSON.parse(localStorage.getItem('user')))
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(user)
        setLoggeado(true)
      }
      else{
        setLogin(null)
        setLoggeado(false)
      }
    });
  }, [])

  return (
    <>
      <MouseTrail strokeColor='#413cff' lag={0.7} lineDuration={30} lineWidthStart={10} />
      <Nav loggeado={loggeado}/>
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
