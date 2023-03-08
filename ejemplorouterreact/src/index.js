import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home/home';
import Contact from './Contact/contact';
import About from './About/about';
import Error from './Error/errorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement: <Error/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>);