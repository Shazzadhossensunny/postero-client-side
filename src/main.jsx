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
import UpdateItems from './pages/UpdateItems.jsx';
import ArtCraftSubCategory from './pages/ArtCraftSubCategory.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://postero-server-side.vercel.app/items')
      },
      {
        path: "/allArtAndCraftItems",
        element: <AllArtCraftItems></AllArtCraftItems>,
        loader: () => fetch('https://postero-server-side.vercel.app/items')
      },
      {
        path: "/addCraftItem",
        element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
      },
      {
        path: "/myArtAndCraftList",
        element: <PrivateRoute><MyArtCraftList></MyArtCraftList></PrivateRoute>
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
        element: <PrivateRoute><ItemDetails></ItemDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://postero-server-side.vercel.app/items/${params.id}`)
      },
      {
        path: "/updateItems/:id",
        element:<PrivateRoute><UpdateItems></UpdateItems></PrivateRoute>,
        loader: ({params}) => fetch(`https://postero-server-side.vercel.app/items/${params.id}`)

      },
      {
        path: "/artCraftSubCategory/:subcategory",
        element: <ArtCraftSubCategory></ArtCraftSubCategory>,
        loader: ({params})=> fetch(`https://postero-server-side.vercel.app/subitems/${params.subcategory}`)

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
