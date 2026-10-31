import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppUsersProvider } from './context/AppUsersContext.jsx'

import './index.css'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/produto/:id', element: <ProductDetails />},
  {path: '/login', element: <Login />},
  {path: '/signup', element: <SignUp />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppUsersProvider>
      <RouterProvider router={router} />
    </AppUsersProvider>
  </StrictMode>,
)
