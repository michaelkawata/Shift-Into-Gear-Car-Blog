import React from 'react'
import '../../App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

//https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [userId, setUserId] = useState('');
  const [body, setContent] = useState('');
  const navigate = useNavigate()


  //ERROR 404 - CREATE NEW ENDPOINT WITH BACKEND I.E app.post('/post, (req,red)
  // https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
  //files fetch needed.  
  //
  //used the backend models as reference 
  //on change events for each of the data sets
  return (
    <div className='add'>
      <h2>Get to blogging</h2>

      <div className="content">
        <label htmlFor="title">TITLE:</label>
        <input
          type="text"
          placeholder='Title'
          id="title"
          value={title}
          onChange={ev => setTitle(ev.target.value)}
        />
        <label htmlFor="title">DATE:</label>
        <input
          type="text"
          placeholder='Date'
          id="date"
          value={date}
          onChange={ev => setDate(ev.target.value)}
        />
        <label htmlFor="title">user id:</label>
        <input
          type="text"
          placeholder='UserId'
          id="userid"
          value={userId}
          onChange={ev => setUserId(ev.target.value)}
        />

      </div>
      <div className="editorContainer">
        <ReactQuill value={body} className="editor" theme="snow" onChange={newValue => setContent(newValue)} />
      </div>
      <button variant="primary" onClick={() => {
        fetch(`/api/posts`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, date, body, userId })
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

  );
}

