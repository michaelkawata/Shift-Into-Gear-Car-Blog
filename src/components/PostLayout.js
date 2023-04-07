import React from "react";
import { Link } from "react-router-dom";

function Post({ _id, title, summary, cover, content, createdAt, author }) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={cover} alt={title} />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <span className="author">{author}</span>
          <span className="date">{format(new Date(createdAt), "MMMM d, yyyy")}</span>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}

export default Post;