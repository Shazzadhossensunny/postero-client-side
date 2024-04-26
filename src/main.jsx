import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import AllArtCraftItems from './pages/AllArtCraftItems.jsx';
import AddCraftItem from './pages/AddCraftItem.jsx';
import MyArtCraftList from './pages/MyArtCraftList.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContextComponent from './Context/AuthContextComponent.jsx';
import ItemDetails from './components/ItemDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/items')
      },
      {
        path: "/allArtAndCraftItems",
        element: <AllArtCraftItems></AllArtCraftItems>
      },
      {
        path: "/addCraftItem",
        element: <AddCraftItem></AddCraftItem>
      },
      {
        path: "/myArtAndCraftList",
        element: <MyArtCraftList></MyArtCraftList>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/itemDetails/:id",
        element: <ItemDetails></ItemDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextComponent>
    <RouterProvider router={router} />
    <ToastContainer />
    </AuthContextComponent>
  </React.StrictMode>,
)
