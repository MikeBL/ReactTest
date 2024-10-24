import { useEffect, useState } from "react";
import MyComp, { MyCompProps } from "./ChildComponent";


const UserList = ()=>{

const [users, setUsers] = useState([]);
  const [sortAsc, setSortAcs] = useState(true)
  const testdata = {name:"test", age:23};

  const testdata2 = {...testdata, age:35}
  console.log(testdata2);
  
  const fetchData = async ()=> {
      const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await reponse.json();
      setUsers(data);
  }

  useEffect(()=>{
    fetchData();
  }, [])
 
  const handleSortOrderChange = ()=>{
    setSortAcs((pre)=> !pre);
    console.log(`the sorting order is: ${sortAsc}`)

  }

  const refreshData = ()=>{
    fetchData()
  }
  
  const sortFunc = sortAsc ? (a, b)=> a.name.localeCompare(b.name) : (a,b) => b.name.localeCompare(a.name);

  const sortedData = [...users].sort(sortFunc)

  return (
    <>
      <div>
        <h1>Users</h1>
        <div className='card-container'>
        { sortedData.map((user, idx)=> (
           <MyComp key={idx} name={user.name} id={user.id} username={user.username}></MyComp>

          ))}
        </div>
      </div>
        <button onClick={handleSortOrderChange}>Sort</button>
        <button onClick={refreshData}>Refresh</button>
    </>
  )
}

export default UserList