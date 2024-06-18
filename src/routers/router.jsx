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
          path : '/book/:id',
          element : <SingleBook/>,
          loader :({params}) => fetch(`http://localhost:5000/book/${params.id}`),
        },
        {
          path:'/admin/dashboard',
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
              element : <UploadBooks/>
            }
          ]
        }
      ]
    },
  ]);
  export default router;