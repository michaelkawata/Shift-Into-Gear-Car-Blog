import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';



function Feed({ post, user }) {
  console.log('feed', post, user);
  let feedFormatted = (
    <div className="">
      <h2>
        <Link to={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </h2>
      <p>
        {user.username} User-Id: {user.id}
      </p>
      <img className="" src={post.pic} alt={post.name} />
      <div class="editorContainer">
        <ReactQuill value={post.body} class="editor" readOnly={true} theme={"bubble"} />
      </div>
    </div>
  );

  return (
    <div>

      {feedFormatted}

    </div>
  );
}

export default Feed;