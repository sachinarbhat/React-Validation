import React from 'react'

function user({ user }) {
    return (
        <tr>            
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.password}</td>
        </tr>


    )
}

export default user
