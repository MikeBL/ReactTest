import { useState, useEffect } from "react";

function getSavedValue(key:string, initialValue:any){
    const fromStore = localStorage.getItem(key);
    if(fromStore){
        const savedValue = JSON.parse(fromStore);
        return savedValue;
    }
    else{
        return initialValue;
    }

}

export default function useLocationStorage(key:string, initialValue:any)
{ 
    const [value, setValue] =useState(()=>{  
        return getSavedValue(key, initialValue)
    })

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])
    return [value, setValue];
}