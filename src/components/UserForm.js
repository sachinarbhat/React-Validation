import React from 'react'
import { useState } from 'react'

function UserForm(props) {
    const [userData, setuserData] = useState({
        firstName: "",
        lastName: "",
        password: ""
    });
    const [FirstErrors, setFirstErrors] = useState("");
    const [LastErrors, setLastErrors] = useState("");
    const [PassErrors, setPassErrors] = useState("");

    const validatepassword = () => {

        if (userData.password) {
            if (
                !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(userData.password)
            ) {
                setPassErrors(
                    "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers"
                )
            }
            else {
                setPassErrors("")
                return true
            }
        }
        else {
            setPassErrors("Enter password")
        }
        return false
    }
    const validatefirst = () => {

        if (userData.firstName) {
            if (userData.firstName.length <= 4) {
                setFirstErrors("First name atleast have 5 letters")
            }
            else {
                setFirstErrors("")
                return true
            }
        }
        else {
            setFirstErrors("Enter First name")
        }
        return false
    }

    const validatelast = () => {
        if (userData.lastName) {
            if (userData.lastName.length <= 4) {
                setLastErrors("Last name atleast have 5 letters")
            }
            else {
                setLastErrors("")
                return true
            }
        }
        else {
            setLastErrors("Enter Last name")
        }
        return false
    }

    let updateUserData = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value,
        })

    }
    let saveData = () => {

        validatefirst();
        validatelast();
        validatepassword();
        if (validatefirst() && validatepassword() && validatelast()) {
            props.getUserData(userData)
            setuserData({
                firstName: "",
                lastName: "",
                password: ""
            })
        }
    }

    return (
        <div className='container'><br />
            <div className="row">
                <div className="col">
                    <input type="text" name='firstName' className="form-control" placeholder="First name" value={userData.firstName} onChange={(event) => { updateUserData(event) }} />
                    {FirstErrors && <div className="text-danger">{FirstErrors}</div>}
                </div>
                <div className="col">
                    <input type="text" name='lastName' className="form-control" placeholder="Last name" value={userData.lastName} onChange={(event) => { updateUserData(event) }} />
                    {LastErrors && <div className="text-danger">{LastErrors}</div>}
                </div>
            </div><br />
            <div className="form-group row">
                <div className="col">
                    <input type="password" name='password' className="form-control" id="inputPassword3" placeholder="Password" value={userData.password} onChange={(event) => { updateUserData(event) }} />
                    {PassErrors && <div className="text-danger">{PassErrors}</div>}
                </div>
            </div>
            <br />
            <div className="form-group row">
                <div className="col">
                    <button type="submit" className="btn btn-primary" onClick={
                        () => { saveData() }
                    }>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default UserForm
