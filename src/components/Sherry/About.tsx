export const SherryAbout = () => {
    return (
        <section className="min-h-screen bg-slate-950 py-16 text-white">
            <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center px-4">
                <div className="w-full rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 p-8 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.8)] ring-1 ring-white/10">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-pink-300">About Sherry</p>
                        <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                            Handcrafted style with a bright, artistic soul.
                        </h1>
                        <p className="max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                            At the heart of this brand lies a passion for handcrafted excellence. Sherry curates and creates distinctive artifacts, artistically painted pots, and premium resin products that combine aesthetics with individuality.
                        </p>
                        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                            Every piece is designed to stand out, offering a unique blend of creativity, craftsmanship, and style — all available at your fingertips.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20">Handmade decor</span>
                            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20">Artistic finish</span>
                            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20">Limited collection</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
