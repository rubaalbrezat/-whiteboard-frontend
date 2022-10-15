import React from 'react'

function CommentsHolder({ comments }) { 
  return (
    <div>
      {comments.map((comment, index) => (         
        <div key={index}>
          <p> By User: {comment.userId}</p>
          <h4>{comment.content}</h4>
          <hr></hr>
        </div>
      ))}
    </div>
  )
}

export default CommentsHolder