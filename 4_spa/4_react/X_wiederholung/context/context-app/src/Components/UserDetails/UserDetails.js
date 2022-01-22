import React, { useState, useContext } from 'react';
import { UserDetailsContext } from '../../UserDetailsContext';

const UserDetails = () =>
{
    const { userDetails, setUserDetails } = useContext(UserDetailsContext);

    return(
       <div>
            <h1>User:</h1>
            <p>
            Name: <b>{ userDetails.firstName } { userDetails.lastName }</b>
            <br />
            Age: <b>{ userDetails.age }</b>
            <br />
            Admin: <b>{ userDetails.isAdmin ? "YES" : "NO" }</b>
            </p>

            <button
                onClick={ () => setUserDetails({ ...userDetails, isAdmin: !userDetails.isAdmin }) }
            >Toggle Admin Rights</button>
       </div>
    )
}

export default UserDetails;
