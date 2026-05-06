import React, { useState } from "react";

export const Dropdown = () =>{
    const options = ["option 1", "option 2", "option 3", "option 4", "option 5"];

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOption, setSelectedOption] = useState<string | null>(null);


    return(
        <div>
            <div className="input-container">
                <input type="text" placeholder="select an option.."
                value={searchTerm}
                onChange={(e)=>{
                    setSearchTerm(e.target.value)
                }}
                />
                <div className="options-container">
                    {options.filter((option)=>
                        option.toLowerCase().includes(searchTerm.toLowerCase())
                    ).map((option, index)=>(
                        <div key={index} className={`option ${selectedOption === option ? "selected" : ""}`}
                        onClick={()=>{
                            setSelectedOption(option);
                            setSearchTerm(option);
                        }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
           

//export default Dropdown;