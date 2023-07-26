import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from 'components/header'
import Footer from 'components/footer'
import HomePage from 'pages/home'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
);
