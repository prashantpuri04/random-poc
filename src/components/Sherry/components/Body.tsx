import { Products } from "./Products"
import { Sidebar } from "./Sidebar"

export const Body = () => { 
    return (
        <div className="flex flex-row gap-4 mt-8"> 
            
            <div className="col-span-2"><Sidebar /></div>
            <div className="col-span-8"><Products /></div>
            <div className="col-span-2"></div>
        </div>
    )
}   