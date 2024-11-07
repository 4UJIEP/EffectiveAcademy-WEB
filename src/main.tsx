import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.scss'
import Characters from './pages/Characters.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import Comics from './pages/Comics.tsx'
import CharacterPage from './pages/CharacterPage.tsx'
import ComicPage from './pages/ComicPage.tsx'
import App from './pages/App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/characters',
        element: <Characters />,
      },
      {
        path: '/characters/:characterId',
        element: <CharacterPage />,
      },
      {
        path: '/comics',
        element: <Comics />,
      },
      {
        path: '/comics/:comicId',
        element: <ComicPage />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
