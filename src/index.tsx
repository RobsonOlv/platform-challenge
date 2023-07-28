import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from 'components/header'
import Footer from 'components/footer'

import HomePage from 'pages/Home'
import PlansPage from 'pages/Plans'

import './index.css'
import 'utils/variables.css'
import AuthContextProvider from 'utils/contexts/AuthContext'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/plans',
    element: <PlansPage />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </AuthContextProvider>
  </React.StrictMode>
);
