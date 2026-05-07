
import { toggleMenu } from "../utils/appSlice"
import { useDispatch } from "react-redux"

export const Navbar = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        console.log("Menu toggled")
        dispatch(toggleMenu());
    }
    return (
   
        <>
        <div className="grid grid-flow-col p-5 m-2">
        <div className="col-span-1 flex flex-row items-center">
            <img
            onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          />Menu
            
        </div>

        <div className="col-span-9 px-10 flex flex-row items-center ">
           
            <input 
            className="px-5 w-full border border-gray-400 p-2 rounded-l-full"
            type="text" placeholder="search"/>
             <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>

        <div className="col-span-2 text-font-bold flex flex-row items-center">
            <p>Login/logout icon</p>
            <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
           
        </div> 
        </div>
        </>
    )
}