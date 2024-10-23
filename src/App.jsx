import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import Rootlayout from './components/Rootlayout.jsx'

function App() {
  const browserRouterObj=createBrowserRouter([
    {
      path:'',
      element:<Rootlayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'signup',
          element: <Signup/>
        },
        {
          path:'signin',
          element: <Signin/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={browserRouterObj}/>
  )
}

export default App