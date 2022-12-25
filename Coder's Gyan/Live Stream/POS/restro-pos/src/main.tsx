import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './Pages/HomePage'
import AuthLayout from './layouts/AuthLayout'
import Login from './Pages/Login'
import Error from './Pages/Error'
import Menu from './Pages/Menu'

const router = createBrowserRouter([
  {
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: 'menu',
        element: <Menu></Menu>,
      },
    ],
  },
  {
    // path: '/about',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
