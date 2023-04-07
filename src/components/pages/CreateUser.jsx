import React from 'react'
import '../../App.css';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';


export default function CreateUser() {
    const [username, setUsername] = useState('');
    const [password, setUserPassword] = useState('');

    async function createNewUser(ev) {
        const data = new FormData();
        data.set('username', username);
        data.set('password', password);
        ev.preventDefault();
    }
        return (
            <div className='add d-row'>
                <h2>Create User</h2>
                 {/* adding routes */}
                <form onSubmit={createNewUser} action="/users" method="POST">
                    <div className="content">
                        <label htmlFor="username">Username: </label>
                        <br/>
                        <input
                            type="text"
                            placeholder='Username'
                            id="username"
                            value={username}
                            onChange={ev => setUsername(ev.target.value)}
                        />
                        <br />
                         <label htmlFor="password">Password: </label>
                        <br/>
                        <input
                            type="password"
                            placeholder='Password'
                            id="password"
                            value={password}
                            onChange={ev => setUserPassword(ev.target.value)}
                        />
                       <br /> 
                        <br />
                    <button class="btn btn-success" variant="primary" type="submit">
                        Submit
                    </button>
                    </div> 
                </form>
        
            </div>
      
        );
    }
