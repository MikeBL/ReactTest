import { useDebugValue, useState } from "react";

const useToggle = ()=>{

    const [value, setValue] = useState(false)

    function  toggleValue(inputValue:boolean)
    {
        setValue(pre=>  typeof inputValue === 'boolean' ? inputValue : !pre);
    }

    return [value, toggleValue]

}

export default useToggle;