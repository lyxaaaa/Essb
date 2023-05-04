import { Navigate } from "react-router-dom"
import Layout from '../components/layout'
import Loading from "../pages/loading"
import Open from '../pages/open'
import Distribution from '../pages/distribution/Distribution'
import Display from '../pages/display'
import Influence from '../pages/influence'
import Protect from '../pages/protect/Protection'
import Sound from "../pages/sound"

//注册路由表
const router = [
    {
        path: '/',
        element: <Navigate to="/loading" />
    },
    {
        path:"/visitor",
        element:<Layout />,
        children:[
            {path:"",element:<Navigate to="distribution" />},
            {path:"distribution",element:<Distribution />},
            {path:"display",element:<Display />},
            {path:"influence",element:<Influence />},
            {path:"protect",element:<Protect />}
        ]
    },
    {
        path:"/open",
        element:<Open />
    },
    {
        path:"/loading",
        element:<Loading />
    },
    {
        path:"/sound",
        element:<Sound />
    }
]
export default router
