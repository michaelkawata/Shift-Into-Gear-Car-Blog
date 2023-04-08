import React from 'react'
import '../../App.css';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


export default function CreateUser() {
    const [username, setUsername] = useState('');
    const [password, setUserPassword] = useState('');
    const navigate = useNavigate()

    return (
        <div className='add d-row'>
            <h2>Create User</h2>
            {/* adding routes */}

            <div className="content">
                <label htmlFor="username">Username: </label>
                <br />
                <input
                    type="text"
                    placeholder='Username'
                    id="username"
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}
                />
                <br />
                <label htmlFor="password">Password: </label>
                <br />
                <input
                    type="password"
                    placeholder='Password'
                    id="password"
                    value={password}
                    onChange={ev => setUserPassword(ev.target.value)}
                />
                <br />
                <br />
                <button class="btn btn-success" variant="primary" onClick={() => {
                    fetch(`/api/users`, {
                        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password })
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            navigate('/')
                        })
                }}>
                    Submit
                </button>
            </div>


        </div>

    );
}