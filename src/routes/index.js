import { useRoutes } from "react-router-dom"
import Error from "../pages/Error"
import Home from "../pages/Home"

export default function WebRouter() {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '*', element: <Error /> },
    ])
    return routes
}
