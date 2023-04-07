import React from 'react'
import '../../App.css';
import Feed from './Feed';

const Post = require('../../postings')

function Home({ data, user, post }) {
 

    return (
      <div  class="d-row">
        <h1 >Welcome to our Car Blog </h1>
        <h6>Username</h6>
        <ul>
          {/* {user.map(user => (
            <li key={user.id}>
              <a href={`/users/${user.id}`}>
                {user.name}
              </a>
            </li>
          ))} */}
        </ul>

        <br/>
        <div className="center d-row">           
            {
                // creating a map
                Post.postings.map((data, i) => {
                    return (
                        <Feed data={data} key={i} />
                        )
            })}
        </div>  
      </div>
    );
}

export default Home;
