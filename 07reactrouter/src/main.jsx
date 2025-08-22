import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom' //comes from react router
import Layout from './layout.jsx'                            // taking files from ather folders
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'
import Github, { githubInfoLoader } from './components/github/github.jsx'

const router = createBrowserRouter(         // craeting routes using function names createBrowserRouter and createRoutesFromElements
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>      {/* Layout is the main component that will be rendered whichh defnes that two things will bw render fro every user and only outlet will change */}
      <Route path='' element={<Home />} />     {/*this page will be render at first when it first visit site Home is the component that will be rendered when user goes to home page */}
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route                                       
        loader={githubInfoLoader}               // loader is used to fetch data before the component is rendered and its function made in github.jsx file
        path='github' 
        element={<Github />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />           // RouterProvider is used to provide the router to the application
  </StrictMode>,
)
