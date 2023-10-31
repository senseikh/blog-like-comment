// Blog.js
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import LikeButton from './likeButton';

const Blog = ({ posts }) => {
  return (
    <div className="blog">
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <LikeButton postId={post.id} />
          <CommentForm postId={post.id} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
