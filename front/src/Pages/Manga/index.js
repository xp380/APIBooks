import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserList() {
    const [UserData, SetUserData] = useState([])
    

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

    return (
        <>
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
        </>
    )



}
export default UserList