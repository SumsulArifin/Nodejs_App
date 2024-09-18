import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Phones from "../Layout/Pages/Phones";
import Phone from "../Layout/Pages/Phone";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/phones",
                element: <Phones></Phones>,
                loader: () => fetch('http://localhost:5000/phone')
            },
            {
                path: '/phone/:id',
                element: <Phone></Phone>,
                loader: ({ params }) => fetch(`http://localhost:5000/phone/${params.id}`)

            }
        ],
    },
]);