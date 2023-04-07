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
  const [files, setFiles] = useState('');
  const [content, setContent] = useState('');


//ERROR 404 - CREATE NEW ENDPOINT WITH BACKEND I.E app.post('/post, (req,red)
// https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
//files fetch needed.  
async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('date', data);
    data.set('url', url);
    data.set('file', files[0]);//[0] grabs the first file  someone selects
    data.set('content', content);
    ev.preventDefault();
    // console.log(files);
    // fetch('http://localhost:3000/post', {
    //   method: 'POST',
    //   body: data,
    // })
  }
  //used the backend models as reference 
  //on change events for each of the data sets
    return (
      <div className='add d-row'>
        <h2>Create New Post</h2>
        {/*  adding routes */}
      <form onSubmit={createNewPost} action="/posts" method="POST">
          <div className="content">
            <div className='d-flex'>
              <div>
            <label htmlFor="title">TITLE:</label>
            <br/>
            <input
            type="text"
            placeholder='Title'
            id="title"
            value={title}
            onChange={ev => setTitle(ev.target.value)}
            />
            </div> 
            <div>               
            <label htmlFor="title">DATE:</label>
            <br/>
            <input
            type="text"
            placeholder='Date'
            id="date"
            value={date}
            onChange={ev => setDate(ev.target.value)}
            />
            </div>
            </div>
            <br/>
            <label htmlFor="title">URL:</label>
            <br/>
            <input
            type="text"
            placeholder='insert https://'
            id="url"
            value={url}
            onChange={ev => setUrl(ev.target.value)}
         />
         <label></label>
            <input
            type="file"
            onChange={ev => setFiles(ev.target.files)}
         />
      </div>
        <div className="editorContainer">
        <ReactQuill value={content} className="editor" theme="snow" onChange={newValue => setContent(newValue)} />
        <button class="btn btn-success center" variant="primary" type="submit">
        Submit
        </button>
        </div>
        </form>
        
      </div>
      
    );
}
 