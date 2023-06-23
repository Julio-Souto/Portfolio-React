import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './Body.jsx';
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import Knowledge from './Knowledge.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <><Knowledge /><Body /></>,
      },
      {
        path: "/RegisterForm",
        element: <RegisterForm />,
      },
      {
        path: "/LoginForm",
        element: <LoginForm />,
      },
      {
        path: "/Proyectos",
        element: <Body />,
      },
      {
        path: "/PaginaProyecto",
        element: <ProjectPage />,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
