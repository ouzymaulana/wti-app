import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Counter from './Components/Counter';
import Form from './Components/Form';
import ApiIntegration from './Components/ApiIntegration';
import Layout from './Components/Layout';
import './index.css'

function App() {
    const router = createBrowserRouter([
      {
        element: <Layout />,
        children: [
          {
            path: "/", element: <Home />,
          },
          {
            path: "/about", element: <About />,
          },
          {
            path: "/counter", element: <Counter />,
          },
          {
            path: "/form", element: <Form />,
          },
          {
            path: "/api-integration", element: <ApiIntegration />,
          },
        ]
      }
    ])
    return <RouterProvider router={router} />;
}

export default App
