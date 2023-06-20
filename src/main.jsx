import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginForm from './LoginForm.jsx';
import Body from './Body.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/LoginForm",
        element: <LoginForm />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Proyectos",
        element: <Body />,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
