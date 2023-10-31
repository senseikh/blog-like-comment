// App.js
import React from 'react';
import './App.css';
import Blog from './components/blog';

const posts = [
  {
    id: 1,
    title: "My First Blog Post",
    content: "This is the content of my first blog post.",
  },
  {
    id: 2,
    title: "Another Blog Post",
    content: "This is another blog post for testing.",
  },
];

function App() {
  return (
    <div className="App">
      <Blog posts={posts} />
    </div>
  );
}

export default App;
