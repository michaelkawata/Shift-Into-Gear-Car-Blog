const Feed = (data) => {
  // let postsFormatted = data.posts.map((post) => {
  //   return (
  //     <div className="col-sm-6 col-md-4 col-lg-3">
  //       {/* <img src={post.img} alt={post.title} /> */}
  //         <h1>Title: {post.title}</h1>
  //           <p>username:</p>
  //           <p>Date: {post.date}</p>
  //       <div>
  //         <p>
  //           Body:{post.body}
  //         </p>
  //       </div>       
  //     </div>
        
  //   )
  // })
  
  return (
    <div >
       {/* {postsFormatted} */}
      {/* <img src={data.posts.img} alt={data.posts.title} /> */}
      <a >
      <h1>Title: </h1>
      </a>
          <p>username:</p>
          <p>Date: </p>
      <div>
        <p>
          Body:
        </p>
      </div>
      </div>
  )
}
export default Feed

