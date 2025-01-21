import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router'
import ROUTES from './Routes/routes'
const routes = createBrowserRouter(ROUTES)

function App() {
 
  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
