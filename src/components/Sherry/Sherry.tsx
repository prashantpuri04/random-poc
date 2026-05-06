import { Header } from "./Header"
import { Products } from "./Products"

export const Sherry =() =>{
    return (
        <div>
            <section className="min-h-screen bg-slate-950 py-16 text-white">
            <h1>Sherry Component</h1>
            <Header />
            <Products />
            </section>
        
        </div>
    )
}