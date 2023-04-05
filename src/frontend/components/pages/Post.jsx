import React from 'react'
import '../../App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const Post = () => {
  const [value, setValue] = useState("");
  
    return (
      <div className='add'>
      <h3>Get to blogging</h3>
      <form>
      <div className="content">
            <label htmlFor="title">TITLE:</label>
            <input
            type="text"
            placeholder='...'
            id="title"
         />
            <label htmlFor="title">DATE:</label>
            <input
            type="text"
            placeholder='...'
            id="date"
         />
            <label htmlFor="title">URL:</label>
            <input
            type="text"
            placeholder='...'
            id="url"
         />
      </div>
        <div className="editorContainer">
        <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
        </form>
        <button>
        Post
        </button>
      </div>
      
    );
}
export default Post;
