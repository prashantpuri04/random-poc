import { useState, useEffect } from "react";
import { LikeAddToCart } from "./LikeAddToCart";

type Product = {
    id: number;
    title: string;
    thumbnailUrl: string;
};

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/photos")
                const data = await response.json();
                setProducts(data.slice(0, 12))
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }
        fetchProducts();
    }, [])

    return (
        <section className="space-y-8 px-4 py-6 sm:px-6">
            <header className="rounded-[2rem] bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 p-8 shadow-2xl text-white text-center sm:text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/90">Featured collection</p>
                <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Stylish picks for your creative lifestyle</h1>
                <p className="mt-3 max-w-xl text-sm text-cyan-100/90 sm:text-base">
                    Discover curated products with bold design, premium details, and polished interactions.
                </p>
            </header>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                    <article
                        key={product.id}
                        className="group overflow-hidden rounded-[2rem] border border-white/20 bg-white/80 p-5 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-100">
                            <img
                                src={product.thumbnailUrl}
                                alt={product.title}
                                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            <span className="absolute left-4 top-4 rounded-full bg-slate-900/85 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                                Premium
                            </span>
                        </div>

                        <div className="mt-5 space-y-4">
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900">{product.title}</h2>
                                <p className="mt-2 text-sm text-slate-500">
                                    A refined product preview designed for modern creative spaces.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                                <span className="rounded-full bg-slate-100 px-3 py-1">Limited edition</span>
                                <span className="rounded-full bg-slate-100 px-3 py-1">Fast delivery</span>
                            </div>

                            <div className="mt-4 flex items-center justify-between gap-4">
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Starting at</span>
                                    <strong className="text-lg text-slate-900">${(product.id % 20) + 15}.00</strong>
                                </div>
                                <LikeAddToCart />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}