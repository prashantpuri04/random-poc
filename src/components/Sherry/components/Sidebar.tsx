import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const isMenuOpen = useSelector((store: { app: { isMenuOpen: boolean; }; }) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <aside className="p-6 w-72 text-slate-900 bg-gradient-to-br from-slate-50 via-white to-sky-100 rounded-3xl shadow-2xl border border-white/70 backdrop-blur-md">
      <div className="mb-6">
        <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/80 shadow-sm">
          <span className="text-xl font-bold text-sky-700">Sherry</span>
          <span className="text-sm text-slate-500">Studio</span>
        </div>
      </div>

      <nav className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate-500">Explore</h2>
          <ul className="space-y-2">
            <li>
              <Link className="block rounded-2xl px-4 py-3 text-slate-800 hover:bg-sky-100 transition" to="/sherry/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="block rounded-2xl px-4 py-3 text-slate-800 hover:bg-sky-100 transition" to="/sherry/about">
                About
              </Link>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate-500">Highlights</h2>
          <ul className="grid gap-2">
            {["Music", "Sports", "Gaming", "Movies"].map((item) => (
              <li key={item} className="rounded-2xl bg-white/80 px-4 py-3 text-slate-700 hover:bg-sky-100 transition">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate-500">Categories</h2>
          <div className="grid gap-2">
            {["Lifestyle", "Tech", "Culture", "Art"].map((category) => (
              <button
                key={category}
                className="w-full rounded-2xl bg-sky-600 px-4 py-3 text-white text-left hover:bg-sky-700 transition"
              >
                {category}
              </button>
            ))}
          </div>
        </section>
      </nav>
    </aside>
  );
};

