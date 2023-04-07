const Feed = (props) => {

  const imgpost = {
    'width': '300px',
    'height': '300px',
  }
  
  
  return (
    <div >
       {/* {postsFormatted} */}
      <h1>Title: {props.data.title}</h1>
          
      <p>
        username:
      <br />
        Date: {props.data.date}
      </p>
      <img style={imgpost} src={props.data.imageURL} alt={props.data.title}/>
      <div>
        <p>
          Body: {props.data.body}
        </p>
      </div>
      </div>
  )
}
export default Feed