import { useEffect, useState } from "react";


const useDebounce = (value, delay)=>{
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(()=>{
        const ref = setTimeout(() => {
            setDebounceValue(value)
        }, delay);

        return ()=> { clearTimeout(ref)}

    }, [value, delay])


    return debounceValue
}

export default useDebounce