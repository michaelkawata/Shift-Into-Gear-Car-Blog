import React from 'react'
import '../../App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

//https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');


//ERROR 404 - CREATE NEW ENDPOINT WITH BACKEND I.E app.post('/post, (req,red)
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('date', data);
    data.set('url', url);
    data.set('content', content);
    ev.preventDefault();
    // console.log(title);
    // fetch('http://localhost:3000/post', {
    //   method: 'POST',
    //   body: data,
    // })
  }
  //used the backend models as reference 
  //on change events for each of the data sets
    return (
      <div className='add'>

         <h2>Get to blogging</h2>
        {/* check on routes */}
      <form onSubmit={createNewPost} action="/posts" method="POST">

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
            placeholder='...'
            id="date"
            value={date}
            onChange={ev => setDate(ev.target.value)}
         />
            <label htmlFor="title">URL:</label>
            <input
            type="text"
            placeholder='...'
            id="url"
            value={url}
            onChange={ev => setUrl(ev.target.value)}
         />
      </div>
        <div className="editorContainer">
        <ReactQuill value={content} className="editor" theme="snow" onChange={newValue => setContent(newValue)} />

        </div>

        <button variant="primary" type="submit">
        Submit
        </button>
        </form>
        
      </div>
      
    );

}

