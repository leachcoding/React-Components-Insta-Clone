// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from '../../dummy-data';

const CommentSection = props => {
  // Add state for the comments
  const [comment, setComment] = useState(props.comments);
  console.log(comment, 'comment useState')
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comment.map(comment => {
        return <Comment comment={comment}/>
      })}
      <CommentInput comment={comment}/>
    </div>
  );
};

export default CommentSection;
