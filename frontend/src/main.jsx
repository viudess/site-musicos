import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PageNotFound from './pages/PageNotFound.jsx'
import Artista from './pages/Artista.jsx'
import ConteudoPrincipal from './pages/ConteudoPrincipal.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchPage from './pages/SearchPage.jsx'
import SearchPageHome from './pages/SearchPageHome.jsx'
import ContextoLogin from './context/ContextoLogin.jsx'
import Tudo from './pages/Tudo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <ConteudoPrincipal />},
      {path: 'artistas/:id', element: <Artista />},
      {path: 'tudo', element: <Tudo />},
      {path: '*', element: <PageNotFound />},
      {path: 'search', element: <SearchPageHome />},
      {path: 'search/:search', element: <SearchPage />}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextoLogin>
      <RouterProvider router={router}/>
    </ContextoLogin>
  </StrictMode>,
)
