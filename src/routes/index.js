import { v4 as uuidv4 } from "uuid"
import Product from "../components/Product";
import Cart from "../components/Layouts/Cart";
import DetailProduct from "../components/Layouts/DetailProduct";
import Home from "../components/Layouts/Home";
import ShowProduct from "../components/Layouts/ShowProduct";
import Login from "../components/Layouts/Login";

const routePublic = [
    {
        id:uuidv4(),
        path:"/",
        component: Home
    },
    {
        id:uuidv4(),
        path:"/product",
        component: Product
    },
    {
        id:uuidv4(),
        path:"/Cart",
        component: Cart
    },
    {
        id:uuidv4(),
        path:"/DetailProduct/:id",
        component: DetailProduct
    },
    {
        id:uuidv4(),
        path:"/ShowProduct/:name",
        component: ShowProduct
    },
    {
        id:uuidv4(),
        path:"/ShowProduct/",
        component: ShowProduct
    },
    {
        id:uuidv4(),
        path:"/Login",
        component: Login
    }

]
const routePrivate=[
    
]
export {routePublic,routePrivate}