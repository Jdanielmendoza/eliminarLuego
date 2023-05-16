import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import App from './App'
import './index.css'
import Login from './views/Login/Login'
import Dashboard from './views/Dashboard/Dashboard'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login />,
  },
  {
    path:"/Dashboard",
    element:<Dashboard/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
