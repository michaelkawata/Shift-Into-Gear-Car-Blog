import React from 'react'
import '../../App.css';
import Feed from './Feed';

const Post = require('../../postings')

function Home({ data, user, post }) {
  const styleHome = {
    'width': 'auto',
    'height': 'auto',
    'border': '2px solid blue',
    'border-radius': '10px', 
    'margin': '2px',
    'text-align': 'center',
    'background': 'black',
    'color': 'white',
    'justify-content': 'center'
  } 

    return (
      <div style={styleHome} class="d-row">
        <h1 >Welcome to our Car Blog </h1>
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
