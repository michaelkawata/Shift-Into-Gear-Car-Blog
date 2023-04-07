import React from 'react'
import '../../App.css';
import Feed from './Feed';

const Post = require('../../postings')

function Home(data) {
    return (
      <div class="d-row">
        <h1 >Welcome to our Car Blog </h1>
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
