import React from 'react'
import User from './User'

function UserTable({ UserFormData }) {
    return (
        <div>
            <br />
            <h1>User Details</h1>
            <table className="table table-dark table-striped table-hover">
                <thead className="table-info">
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Pasword</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        UserFormData.map((user, idx) => {
                            return <User key={idx} user={user} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserTable
