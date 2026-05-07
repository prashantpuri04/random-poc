import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SherryLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        let pass = '12345';
        e.preventDefault();
        // Handle login logic here
        console.log("Login form submitted");
        console.log("Username:", username);
        console.log("Password:", password);
        if(password === pass){
            alert("Login successful!");
            // Clear the inputs after submit
            setUsername("");
            setPassword("");
            navigate("/sherry");
        }else{
            alert("Invalid credentials. Please try again.");
        }


    }
   

    return (
        <div className=" min-h-screen bg-slate-950 py-16 text-whitew-full h-screen bg-gray-100 flex items-center space-between justify-center">
           
            <form className="flex flex-col bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                
                
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username:</label>
                <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-2 p-2 rounded bg-gray-100 text-gray-800" />

                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4 p-2 rounded bg-gray-100 text-gray-800" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
                
            </form>
           
        </div>
    )
}