export const LikeAddToCart = () => {
    return (
        <div className="flex flex-row gap-4 mt-8">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <img src="/src/components/Sherry/Assets/like.svg" alt="Like" className="w-5 h-5" />
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
                Add to Cart
            </button>
        </div>
    )
}