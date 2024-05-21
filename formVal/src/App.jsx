import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './Components/Auth/SignUp'
import Admin from './Components/Test/Admin'
import Home from './Components/Test/Home'
import SignIn from './Components/Auth/SignIn'
import PrivateRoute from './Components/Validation/PrivateRoute'
import Tutor from './Components/Test/Tutor'
import Authroute from './Components/Validation/Authroute'
import SecretRoute from './Components/Validation/SecretRoute'


const router = createBrowserRouter([
  {
    path:"/",
    element:<SignUp />
  },
  {
    path:"/signin",
    element:<SignIn />
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path:"/admin",
        element:<Admin />
      },
    ],
  },
  {
    path: "/",
    element: <Authroute />,
    children: [
      {
        path:"/home",
        element:<Home />
      },
    ],
  },
  {
    path: "/",
    element: <SecretRoute />,
    children: [
      {
        path:"/tutor",
        element:<Tutor />
      },
    ],
  },
])

function App() {

  return (

    <RouterProvider router={router} />
  
  )
}

export default App
