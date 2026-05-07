import  { useState, useEffect } from "react";


type Product = {
    id: number;
    title: string;
    thumbnailUrl: string;
};

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        // Fetch products data from an API or database
        const fetchProducts = async()=>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/photos")
                const data = await response.json();
                console.log("Fetched products data:", data)
                setProducts(data.slice(0, 10)) // Set the first 10 products for demonstration
            }    catch(error) {
                console.error("Error fetching products:", error)
            }
        }
        fetchProducts();
        //   Set the products data to state here
    }, []) // Empty dependency array means this effect runs once on mount

    return (
        <div className=""> 
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded bg-gray-100">
                        <img src={product.thumbnailUrl} alt={product.title} className="w-full h-auto mb-2 text-gray-800" />
                        <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}