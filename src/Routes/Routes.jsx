import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginLayout from "../Pages/LoginLayout/LoginLayout";
import Shops from "../Pages/Shop/Shops";
import ToyDetails from "../Pages/Shop/ToyDetails";
import PrivetRoute from "./PrivetRoute";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateFrom from "../Pages/MyToys/UpdateFrom";
import Error from "../Pages/ErrorPage/Error";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement:<Error/>,
        children: [
            {
                path: '/',
                element: <Shops />
            },
        ]
    },

    {
     path: 'addtoy',
     element:<AddToys/>

    },

    {
      path:'alltoys',
      element:<AllToys></AllToys>
    },
   
    {
        path: 'details/:id',
        element: <PrivetRoute><ToyDetails /></PrivetRoute>,
         loader: ({ params }) => fetch(`https://babybo-toys-server.vercel.app/shopData/${params.id}`),

    },
    {
        path: 'mytoys',
        element: <PrivetRoute><MyToys/></PrivetRoute>
    },
    {
      path: 'update/:id',
      element:<UpdateFrom/>
    },


    {
        path: 'blog',
        element: <Blog />
    },
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Register />
            }
        ]
    }
]);

export default router;