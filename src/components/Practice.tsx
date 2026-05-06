import { DisplayName } from "./DisplayName";
import { useEffect, useState, useCallback, useRef } from "react";

export const Practice = () => {
    const [loginStatus, setLoginStatus] = useState(false);
    const [value, setValue] = useState("");
    const [apiData, setApiData] = useState<any[]>([]);
    const [unfilteredApiData, setUnfilteredApiData] = useState<any[]>([]);
    const debounceTimeout = useRef<number | null>(null);

    function handleLogin(){
        setLoginStatus(!loginStatus);  
    }
    const handleInputSearch = useCallback((value: string) => {
        console.log("Input value:", value);
        setValue(value);

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            const filtered = apiData.filter((item) =>
                item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.username.toLowerCase().includes(value.toLowerCase())
            );
            setUnfilteredApiData(filtered);
        }, 300);
    }, [apiData]);

    useEffect(()=>{
        console.log("Practice component mounted");
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then(data=>{
            console.log("Fetched API data in Practice component:", data);
            setApiData(data);
        })
    }, [])

    return (
        <div>
            <h1>Practice Page</h1>
            <p>This is the practice page of the website.</p>
            <input type="text" placeholder="Enter something..." 
            value={value} onChange={(e)=>handleInputSearch(e.target.value)}/>
            <DisplayName name="sherry" username="sherry123" />
            <button onClick={handleLogin}>{loginStatus ? "logout" : "login"}</button>

            <h2>API Data:</h2>
            {apiData.length > 0 ? (
                apiData.map((item)=>{
                    return <DisplayName key={item.id} name={item.name} username={item.username} />
                })
            ) : (
                <p>No API data available.</p>
            )}

            {unfilteredApiData.length > 0 && (
                <div>
                    <h2>Filtered API Data:</h2>
                    {unfilteredApiData.map((item, index) => (
                        <DisplayName key={index} name={item.name} username={item.username} />
                    ))}
                </div>
            )}
        </div>
    )
}