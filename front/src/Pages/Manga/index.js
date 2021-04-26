import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

function UserList() {
    const [UserData, SetUserData] = useState([])
    const [UserName, SetUserName] = useState('')
    const [UserRole, SetUserRole] = useState('')

    function GetAllUSers() {
        axios.get('https://api.jikan.moe/v3/top/anime/1/upcoming')
            .then(response => {
                console.log(response.data)
                const { top } = response.data
                SetUserData(top)
            }).catch(error => {
                console.log(error);
            })

    }

    useEffect(() => {
        GetAllUSers();
    }, [])


    function onUserNameChange(event) {
        SetUserName(event.target.value);
    }

    function onUserRoleChange(event) {
        SetUserRole(event.target.value);
    }

    const AddUser = async (event) => {
        event.preventDefault();
        await (res => {
            console.log(res.data);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <Fragment>
            <div className="container">
                <h1 className="header">User List</h1>

                <table id='tblUser' className="Users">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {UserData.map((user) => (
                            <tr key={user.mal_id}>
                                <td>{user.rank}</td>
                                <td>{user.type}</td>
                                <td>{user.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )



}
export default UserList