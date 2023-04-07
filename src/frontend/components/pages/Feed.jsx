import React from 'react'
import '../../App.css';




function Feed({ post, user }) {
  console.log('feed', post, user);
  let feedFormatted = (
    <div className="">
      <h2>
        <a className="" href={`/places/${post.id}`}>
          {post.title}
        </a>
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