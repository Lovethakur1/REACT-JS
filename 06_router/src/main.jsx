import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// const router =  createBrowserRouter (
// [{ path : '/',
//   element: <App/>,
//   children: [{
//     path: "",
//     element: <Home/>,
//   },
// {
//   path: "about",
//   element: <About/>,
// },
// {
//   path: "ContactUs",
//   element: <ContactUs/>, 
// }
// ]}]
  
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contactus' element={<ContactUs/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route path='github'
      loader ={githubInfoLoader} element={<Github/>} />


      

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
