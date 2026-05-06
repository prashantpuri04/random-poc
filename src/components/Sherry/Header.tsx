import { Link } from "react-router-dom"
import { SherryLogin } from "./Login"

export const Header = () => {
    return (
        <div className="w-full h-16 bg-red-500 flex flex-row justify-around items-center">
            
            <Link to="/sherry/login" className="text-white text-lg font-bold">
            <SherryLogin />
            </Link>
            <h1>Products</h1>
            <h1>Categories</h1>
            <h1>Cart</h1>
            <h1>Logout</h1>
            <Link to="/sherry/about" className="text-white text-lg font-bold">About</Link>

        </div>
    )
}