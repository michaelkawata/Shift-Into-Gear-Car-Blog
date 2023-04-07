import React from 'react'
import '../../App.css';
import Feed from './Feed';



function Home(data) {
    return (
      <div>
        <h1 >Welcome to our Car Blog </h1>
        <Feed data={data} />
      </div>
    );
}

export default Home;
