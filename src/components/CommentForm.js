// CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div>
      <textarea
        placeholder="Add your comment..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button onClick={handleSubmitComment}>Submit</button>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
    </div>
  );
};

export default CommentForm;
