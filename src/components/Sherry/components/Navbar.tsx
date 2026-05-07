import { toggleMenu } from "../utils/appSlice"
import { useDispatch } from "react-redux"

export const Navbar = () => {
    const dispatch = useDispatch();
    const productTags = ["New Arrivals", "Best Sellers", "Featured", "Trending"];

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-700 text-white rounded-[2rem] shadow-2xl p-5 m-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={toggleMenuHandler}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/20 transition hover:bg-white/20"
                    >
                        <img
                            className="h-6"
                            alt="menu"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
                        />
                    </button>
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-sky-200">Sherry Studio</p>
                        <h1 className="text-2xl font-semibold">Creative Marketplace</h1>
                    </div>
                </div>

                <div className="flex flex-1 items-center gap-3 rounded-full bg-white/10 p-2 ring-1 ring-white/15 shadow-inner">
                    <input
                        className="flex-1 rounded-full border-none bg-transparent px-5 py-3 text-white placeholder-slate-200 focus:outline-none"
                        type="text"
                        placeholder="Search products, music, gear..."
                    />
                    <button className="rounded-full bg-white px-5 py-3 text-slate-900 font-semibold transition hover:bg-slate-100">
                        🔍
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex flex-col text-right">
                        <span className="text-sm text-sky-100">Welcome back</span>
                        <strong className="text-lg">Jane Doe</strong>
                    </div>
                    <div className="flex items-center gap-3 rounded-3xl bg-white/10 px-4 py-2 ring-1 ring-white/20">
                        <img
                            className="h-12 w-12 rounded-full object-cover"
                            alt="user"
                            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                        />
                        <span className="hidden sm:inline text-sm text-slate-100">Login / Logout</span>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
                {productTags.map((tag) => (
                    <button
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:border-white hover:bg-white/20"
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </header>
    )
}