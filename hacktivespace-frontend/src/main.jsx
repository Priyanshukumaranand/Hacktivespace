
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import './styles.js'; 
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import User from './components/User/User.jsx';
import Github, { GitHubLoader } from './components/Github/Github.jsx';
import Login from './components/Login/Login.jsx';
import People from './components/People/People.jsx';
import OurWork from './components/OurWork/OurWork.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'user', element: <User /> },
      { path: 'github', element: <Github />, loader: GitHubLoader },
      { path: 'login', element: <Login /> },
      { path: 'people', element: <People /> },
      { path: 'ourwork', element: <OurWork /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);