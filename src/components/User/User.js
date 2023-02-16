import React from 'react';

function User(props) {
    let {user, lift} = props;
    return (
        <div>
            {user.name} - {user.email} <br/>
            {user.address.street}
            <button onClick={() => {lift(user)}}>details</button>
        </div>
    );
}

export default User;