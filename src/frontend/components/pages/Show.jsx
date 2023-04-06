import React from 'react'
import '../../App.css';
import Feed from "./Home"


export default function Show(data) {


    return (
        <div>
            <Feed />
            <div className="edit-delete">
                <div className="p-2">
                    {/* working on the routes at */}
                <a href={`/posts/${data.params.id}/edit`} className="btn btn-primary"> 
                  Edit
                </a> 
              </div>           
                <div className="p-2">
                    {/* working on the routes at */}
                <form method="POST" action={`/posts/${data.params.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form> 
                </div>  
            </div>
      </div>
    );
}

