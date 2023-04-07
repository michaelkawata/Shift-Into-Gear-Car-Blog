const Feed = (props) => {

  return (
    <div >
       
      <h1>Title: {props.data.title}</h1>
          
      <p>
        username:
      <br />
        Date: {props.data.date}
      </p>
      <div>
        <p>
          Body: {props.data.body}
        </p>
      </div>
      </div>
  )
}
export default Feed