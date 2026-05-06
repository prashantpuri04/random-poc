import { useEffect, useState } from "react"
import { UserProfile } from "./userProfile"
export const ListData = () => {

    const [apiData, setapidata] = useState<any[]>([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(()=>{
            console.log("ListData component mounted")
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched API data:", data)
                setapidata(data)
            })
            .catch((error) => console.error("Error fetching data:", error));
            
           
            
    },[])
    const data = [
        {
            id: 1,
            name: "prashant",
            age: 24
        },
        {
            id: 2,
            name: "sherry",
            age: 23
        },
    ];


    // Filter API data and local data based on searchText
    const filteredApiData = apiData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.username?.toLowerCase().includes(searchText.toLowerCase())
    );
    const filteredLocalData = data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div >
            <h1>List Data</h1>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search by name or username..."
               className="border border-solid p-3 m-4"
            />

            <h2>API Data:</h2>
            <div className="flex flex-row">
            {filteredApiData.length > 0 ? (
                            filteredApiData.map((item) => (
                                <UserProfile key={item.id} name={item.name} username={item.username} />
                            ))
                        ) : (
                            <p>No API results found.</p>
                        )}
            </div>
            

            <h2>Local Data:</h2>
            {filteredLocalData.length > 0 ? (
                filteredLocalData.map((item) => (
                    <UserProfile key={item.id} name={item.name} age={item.age} />
                ))
            ) : (
                <p>No local results found.</p>
            )}
        </div>
    )
   
    
}