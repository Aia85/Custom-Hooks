import { useState } from "react"

export const useCounter = (initialValue = 10) =>{


    const [counter, setCounter] = useState(initialValue)

    const increment = (value=6) =>{
        if(counter===19) return;
        setCounter(counter+value)
    }
    const decrement = () =>{
        if (counter===1) return;
        setCounter(counter-6)   
    }         
   
    const reset = () =>{
        setCounter(initialValue)
    }

    return{
        counter, 
        increment,
        decrement,
        reset
    }
}