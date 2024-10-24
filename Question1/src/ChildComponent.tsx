
export interface MyCompProps  {
    name:string
    username:string
    id:number
}

const MyComp = (user:MyCompProps)=>{
    return (
        <>
              <div key={user.id} className='card'>
                <p>{user.name}</p>
                <p>{user.username}</p>
              </div>
        </>
    )
}

export default MyComp