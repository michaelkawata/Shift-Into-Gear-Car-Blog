import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom'




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
        {user.username}
      </p>
      <img className="" src={post.pic} alt={post.name} />
      <div>
        {post.body}
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