import { useMemo, useReducer, useState } from "react";
import useToggle from "./hooks/useToggle";
import useDebounce from "./hooks/useDebouncer";

const reducer = (state, action)=>{
    switch(action.type){
        case 'Test1':
            return {
                ...state,
                new:"test1"
            }
            
        case 'Test2':
            return {
                ...state,
                new:"test2"
            }
            
        default:
            return state
    }
}


const MyForm = ()=>{
   
    
    const [value, setValue] = useState();

    const debounceValue = useDebounce(value, 1000);
    
    const handleChange = (e)=>{
        setValue(e.target.value)
    }

    

    return (
        <>
                <div><h1>{debounceValue}</h1></div>
                <input value={value} onChange={handleChange}></input>
        </>
    )
}

export default MyForm