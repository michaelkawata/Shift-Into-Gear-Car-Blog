import React from 'react'
import '../../App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const Post = () => {
  const [value, setValue] = useState("");
  
    return (
      <div className='add'>
      <div className="content">
        <input type="text" placeholder='TITLE' />
        <div className="editorContainer">
        <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
        <button onClick={postMessage}>
        Post
        </button>
      </div>
      </div>
    );
}
export default Post;