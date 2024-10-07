import {createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Register from "../components/Register";
import Login from "../components/Login";
const URL = import.meta.env.VITE_BASE_URL;

  const router = createBrowserRouter([

    {
      path: "/",
      element:<App />,
      children: [
        {
          path : '/',
          element : <Home/>   
        },
        {
          path : '/shop',
          element : <Shop/>
        },
        {
          path : '/about',
          element : <About/>
        },
        {
          path : '/blog',
          element : <Blog/>
        },
        {
          path : '/register',
          element : <Register/>
        },
        {
          path : '/login',
          element : <Login/>
        },
        {
          path : '/book/:id',
          element : <SingleBook/>,
          loader :({params}) => fetch(`${URL}/book/${params.id}`),
        },
        {
          path:'/',
          element: <DashboardLayout />,
          children:[
            {
              path : '/admin/dashboard',
              element : <Dashboard/>
            },
            {
              path : '/admin/dashboard/upload',
              element : <UploadBooks/>
            },
            {
              path : '/admin/dashboard/manage',
              element : <ManageBooks/>
            },
            {
              path : '/admin/dashboard/edit-books/:id',
              element : <EditBooks/>,
              loader :({params}) => fetch(`${URL}/book/${params.id}`)
           }
          ]
        }
      ]
    },
  ]);
  export default router;