import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Routes from './components/Routes/Routes';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    errorElement : <Error />,

    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/dashboard",
        element : <Dashboard />
      }
    ]

  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
