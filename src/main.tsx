import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// REACT-ROUTER
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
//Pages Import
import Dashboard from './Dashboard.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ProductsPage from './pages/ProductsPage.tsx'
import ContactsPage from './pages/ContactsPage.tsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Dashboard />
  },
  {
    path:'/about',
    element: <AboutPage />
  },
  {
    path:'/products',
    element: <ProductsPage />
  },
  {
    path:'/contacts',
    element: <ContactsPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
