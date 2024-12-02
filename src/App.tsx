import { BrowserRouter, Navigate, useRoutes} from 'react-router-dom'
import './index.scss'
import Characters from './pages/Characters.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import Comics from './pages/Comics.tsx'
import CharacterPage from './pages/CharacterPage.tsx'
import ComicPage from './pages/ComicPage.tsx'
import Layout from './pages/Layout.tsx'
import Favourites from './pages/Favourites.tsx'

function AppRoutes()
{
  const routes = [
    {
      path: "/",
      element: <Layout/>,
      errorElement: <NotFoundPage/>,
      children: [
        {
          path: "/", 
          element: <Navigate to="/characters" replace/>
        },
        {
          path: "/characters", 
          element: <Characters/>
        },
        {
          path: '/characters/:characterId',
          element: <CharacterPage/>,
        },
        {
          path: '/comics',
          element: <Comics/>,
        },
        {
          path: '/comics/:comicId',
          element: <ComicPage/>,
        },
        {
          path: "/favourites", 
          element: <Favourites/>,
        },
      ]
    }
  ];
  return useRoutes(routes);
}

function App()
{
  return (<BrowserRouter><AppRoutes/></BrowserRouter>);
}

export default App;
