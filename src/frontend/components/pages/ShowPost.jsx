import React, { useEffect } from 'react'
import '../../App.css';
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import ReactQuill from 'react-quill';


export default function ShowPost() {
  const { id } = useParams();
  const navigate = useNavigate()


  const [post, setPost] = useState();
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setValue(data.body);
      })
  }, [])

  return (
    <div>
      {
        post && (
          <div className="edit-delete">
            <div className="p-2">
              <div>{post.title}</div>
              <div className="editorContainer">
                <ReactQuill value={value} className="editor" theme="snow" onChange={(e) => {
                  setValue(e)
                }} />
              </div>
              {/* working on the routes at */}
              <button className="btn btn-primary" onClick={() => {
                fetch(`/api/posts/${id}`, {
                  method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ body: value })
                })
                  .then(res => res.json())
                  .then(data => {
                    console.log(data)
                  })
              }}>
                Save
              </button>
            </div>
            <div className="p-2">
              {/* working on the routes at */}

              <button className="btn btn-danger" onClick={() => {
                fetch(`/api/posts/${id}`, { method: 'DELETE' })
                  .then(res => res.json())
                  .then(() => navigate('/'))
              }}>
                Delete
              </button>

            </div>
          </div>
        )
      }

    </div>
  );
}

