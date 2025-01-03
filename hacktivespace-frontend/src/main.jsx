import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github,{ GitHubLoader } from './components/Github/Github.jsx'
import Login from './components/Login/Login.jsx'
import People from './components/People/People.jsx'
import 'tw-elements-react/dist/css/tw-elements-react.min.css';
import OurWork from './components/OurWork/OurWork.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:'',
        element: <Home/>
      },
      {
        path:'about',
        element:<About/>

      },
      {
        path:'people',
        element:<People/>

      },
      {
        path:'ourwork',
        element:<OurWork/>

      },
      {
        path:'user/:id',
        element:<User/>

      },
      {
        loader:{GitHubLoader},
        path:'github',
        element:<Github/>,
        id: "1",
        

      },{
        path:'Login',
        element:<Login/>
      }
    ]

  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
