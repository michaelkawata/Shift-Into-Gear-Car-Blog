import React from 'react'
import '../../App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';


export default function CreateUser() {
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
  


    async function createNewUser(ev) {
        const data = new FormData();
        data.set('username', username);
 
        ev.preventDefault();

        return (
            <div className='add'>
                <h2>Create User</h2>
                <form onSubmit={createNewUser}>
                    <div className="content">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            placeholder='Username'
                            id="username"
                            value={username}
                            onChange={ev => setUsername(ev.target.value)}
                        />
            
                    </div>
                    <div className="editorContainer">
                        <ReactQuill value={content} className="editor" theme="snow" onChange={newValue => setContent(newValue)} />
                    </div>
                    <button variant="primary" type="submit">
                        Submit Username
                    </button>
                </form>
        
            </div>
      
        );
    }
}