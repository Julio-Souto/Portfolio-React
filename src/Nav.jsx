import { signOut } from "firebase/auth"
import { Link } from "react-router-dom"
import { auth } from "./firebase"

// eslint-disable-next-line react/prop-types
function Nav({loggeado}) {
  const handleLogin = () => {
    signOut(auth)
      .then(() => {
        // localStorage.removeItem('user')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-slate-800">
        <h2 className="text-2xl font-bold">Portfolio</h2>
        <div className="space-x-4">
          <Link to='Proyectos'>Proyectos</Link>
          <Link to='RegisterForm'>Regístrate</Link>
          <button className='log-in-button' onClick={handleLogin}>{!loggeado ? <Link to='LoginForm'>Inicia Sesion</Link> : "Cerrar Sesion"}</button>
        </div>
      </div>
    </>
  )
}

export default Nav