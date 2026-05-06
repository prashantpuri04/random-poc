export const SherryLogin = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login form submitted");
        console.log("Username:", (e.target as any).username.value);
        console.log("Password:", (e.target as any).password.value);
        // handle submit logic to be added
    }   

    return (
        <div className=" min-h-screen bg-slate-950 py-16 text-whitew-full h-screen bg-gray-100 flex items-center space-between justify-center">
           
            <form className="flex flex-col bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                
                
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username:</label>
                <input type="text" id="username" placeholder="Username" className="mb-2 p-2 rounded bg-gray-100 text-gray-800" />

                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                <input type="password" id="password" placeholder="Password" className="mb-4 p-2 rounded bg-gray-100 text-gray-800" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
                
            </form>
           
        </div>
    )
}