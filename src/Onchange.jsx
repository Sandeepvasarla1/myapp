import React, { useState } from "react";

function Onchange() {
    const [user, setUser] = useState({
        firstname: "",
        lastname: ""
    });

const [firstname, lastname] = user;
    const handler = e => {
        setUser({...user, [e.target.name]: [e.target.value]})
    }

    return (
        <div>
            <h1>Onchange Event handling</h1>
            <label htmlFor="firstname">First Name</label>
            <input
                type="text"
                name="firstname"
                value={user.firstname}
                onChange={handler}
            />

            <label htmlFor="lastname">Last Name</label>
            <input
                type="text"
                name="lastname"
                value={user.lastname}
                onChange={handler}
            />
            <br />
            <h1>{JSON.stringify(user)}</h1>
        </div>
    );
}

export default Onchange;
