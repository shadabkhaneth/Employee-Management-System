import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllUser = () => {
  const[users , setusers] = useState([]);
  // const[deleteduser]

  useEffect(()=>{
    axios.get('http://localhost:3000/content')
    .then((res)=>{
      setusers(res.data);
    })
    .catch((err)=>{
      console.log("err"+err);
    })
  },[])

 const handlerDeleted = (id) => {
  axios.delete(`http://localhost:3000/content/${id}`)
    .then(() => {
      setusers(users.filter(user => user.id !== id));
    })
    .catch((err) => {
      console.log("Error: " + err);
    });
};


  return (
    <div>
        <div>
      <h2>All Users</h2>
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <div key={user.id} style={{border: "1px solid gray", padding: "10px", marginBottom: "10px"}}>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name || user.Name}</p>
            <p><strong>Salary:</strong> {user.salary}</p>
            <p><strong>Company:</strong> {user.company}</p>
            <p><button onClick={()=>handlerDeleted(user.id)}>Delete</button></p>
          </div>
        ))
      )}
    </div>
    </div>
  )
}

export default AllUser
