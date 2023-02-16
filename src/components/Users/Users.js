import React, {useEffect, useState} from 'react';
import User from "../User/User";

function Users() {

    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)

    const lift = (item) => {
        setUser(item);
    }



    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(obj => obj.json())
            .then(obj => setUsers(obj))
    },[])

    return (
        <div>

            <hr/>
            {user?<div>{user.name}</div>:<div>clean</div>}
            <hr/>

            {users.map((user,index)=> (<User user={user} key={index} lift={lift}/>))}
        </div>
    );

}

export default Users;