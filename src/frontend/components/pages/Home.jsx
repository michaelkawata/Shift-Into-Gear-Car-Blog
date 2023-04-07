import React, { useState } from 'react'
import { useEffect } from 'react';
import '../../App.css';
import Feed from './Feed';


function Home() {
  async function getAllPosts() {
    await fetch('/posts')    // call the request
      .then(res => res.json()) // turn the Promise into actual json 
      .then(result => {         // result === the actual json
        console.log('postpost', result);
        setPosts(result);       // setting the variable 'posts'
      });
  }

  const [posts, setPosts] = useState([]) // posts = []

  useEffect(() => {
    getAllPosts();
  }, []); // dependency array. since it's empty, it will only call once when it renders

  return (
    <div>
      <h1>Feed</h1>
      {
        posts.map(
          (obj) => (
            <Feed post={obj.post} user={obj.user} />
          )
        )
      }
      {/* <Feed post={posts[0].post} user={posts[0].user} /> */}
    </div>
  );
}

export default Home;