import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers)
  const handleDeleteUser = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    if(data.deletedCount>0){
        alert('deleted successfully');
        const remaining = users.filter(user=>user._id !== _id);
        setUsers(remaining);
    }
    })
  };
  return (
    <div>
      <div>
        <p>user :{loadedUsers.length}</p>
        <div>
          {loadedUsers.map((user) => (
            <div key={user._id}>
              <p>id: {user._id} email: {user.email}<Link to={`/update/${user._id}`}>Update</Link>  <button onClick={() => handleDeleteUser(user._id)}>X</button></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
