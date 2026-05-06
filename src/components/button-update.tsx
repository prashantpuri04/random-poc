import { useState } from "react"

export const ButtonUpdate = () => {
      const [count, setCount] = useState(0)
      
    return (
        <div>
           <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          increement counter  
        </button>
         <button
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          decreement counter  
        </button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
      
    )
}

