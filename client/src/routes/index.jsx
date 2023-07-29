import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PersonasAdd from "../pages/personas/PersonasAdd";
import Login from "../components/Login";

export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path:'personas/agregar',
                element: <PersonasAdd />
            },
            {
                path:'personas/login',
                element: <Login />
            },
        ]
    }
]);