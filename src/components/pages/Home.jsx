import React from 'react'
import '../../App.css';
import Feed from './Feed';



function Home(data) {
    return (
      <div class="d-row">
        <h1 >Welcome to our Car Blog </h1>
        <br/>
        <div class="center">
        <Feed data={data} />
        </div>
      </div>
    );
}

export default Home;
