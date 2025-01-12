import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../public/css/style.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blogs from './components/Blogs/Blogs.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Services from './components/Services/Services.jsx'
import OurWork from './components/OurWork/OurWork.jsx'
import BlogsPage from './components/Blogs/BlogPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />

      },
      {
        path: 'blogs',
        element: <Blogs />

      },
      {
        path: 'projects',
        element: <OurWork />

      },
      {
        path: 'contact',
        element: <Contact />

      },
      {
        path: 'services',
        element: <Services />

      },
      {
        path: 'blog-page',
        element: <BlogsPage />
      },
      {
        path: 'blogs/:slug',
        element: <BlogsPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
