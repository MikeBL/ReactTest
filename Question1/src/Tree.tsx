import { useState } from "react";

const Tree = ({treedata, level})=>{

    const [expand, setExpand] = useState(false)

    const handleExpand =()=>{
        setExpand(pre=> !pre);
    }

    const test1 = ()=>{
        return new Promise((resolve, reject)=> {
            const num = Math.floor(Math.random() * 100);
    
            setTimeout(() => {
                if(num%2===0){
                    resolve("this is promise data");
                }
                else{
                    reject("bad request")
                }
            }, 1000);
        });
    }
   
    
    const testFunction = async ()=>{
        try{
            const res = await test1();
            console.log(res)
        }
        catch(error){
            console.log(error)
        }
        
       
    }

    testFunction();
    const paddingValue = level+'em';
    return (
        <>
            <div style={{paddingLeft:paddingValue}}>
                {
                    expand ? <span>-</span> : <span>+</span>
                }
                <span onClick={handleExpand}>{treedata.name}</span>
            </div>
            {

                expand ? treedata.children?.map((item, idx)=>{
                    return <Tree key={idx} treedata={item} level={level+1}></Tree>
                }) : <></>

            }
          
        </>
    )
}

export default Tree