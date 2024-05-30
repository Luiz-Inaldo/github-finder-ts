import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Home } from './routes/Home/Home.tsx'
import { Repositories } from './routes/Repositories/Repositories.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        // colocando dois pontos indica um dado dinamico
        path: '/repos/:username',
        element: <Repositories />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
