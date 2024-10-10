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
import Login from "../components/Login";
import Signup from "../components/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
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
          path : '/sign-up',
          element :<Signup />
        },     
        {
          path :'/logout',
          element : <Logout/>
        },
        {
          path : '/book/:id',
          element : <SingleBook/>,
          loader :({params}) => fetch(`${URL}/book/${params.id}`),
        },
        {
          path: '/admin/dashboard',
          element: <DashboardLayout />,
          children:[
            {
              path : '/admin/dashboard',
              element : <PrivateRoute><Dashboard/></PrivateRoute>
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
      ],     
    },
    {
      path : 'sign-up',
      element :<Signup />
    },
    {
      path : '/login',
      element : <Login/>
    },
  ]);
  export default router;