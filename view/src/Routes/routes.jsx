import Root from "../Components/Root";
import AddPage from "../Pages/AddPage";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";



const ROUTES = [
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/addpage",
                element:<AddPage/>
            },
            {
                path:"/products/:id",
                element:<Detail/>
            }
        ]
    }
]

export default ROUTES