// LikeButton.js
import React, { useState } from 'react';

const LikeButton = ({ postId }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <span>{likes} Likes</span>
    </div>
  );
};

export default LikeButton;
