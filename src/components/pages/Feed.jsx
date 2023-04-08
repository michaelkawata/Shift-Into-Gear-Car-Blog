const Feed = (props) => {

  const styleFeed = {
    'width': 'auto',
    'height': 'auto',
    'border': '1px solid gray',
    'border-radius': '10px', 
    'margin': '2px',
    'text-align': 'center',
    'background': 'black',
    'color': 'white',
    'justify-content': 'center'
  }

  return (
    <div style={styleFeed}>
       
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