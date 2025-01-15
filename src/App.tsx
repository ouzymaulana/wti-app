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
  // const [count, setCount] = useState(0)
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
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
}

export default App
