import Post from "./Post";
import { useState } from "react";
import uuid from "react-uuid";

export default function Posts() {
  const [posts, setPosts] = useState(
    [
      {
        id: uuid(),
        title: 'What is this',
        likes: 3,
        dislikes: 0
      },
      {
        id: uuid(),
        title: 'How to do it',
        likes: 7,
        dislikes: 8
      },
      {
        id: uuid(),
        title: 'Where to find',
        likes: 1,
        dislikes: 1
      }
    ]
  );

  // Sum up the total of likes and dislikes.
  let totalLikes = 0;
  let totalDislikes = 0;
  posts.forEach((post) => {
    totalLikes += post.likes;
    totalDislikes += post.dislikes;
  });

  const handleAddPostClick = () => {
    const updatedPosts = [...posts];
    updatedPosts.push(
      {
        id: uuid(),
        title: 'New post',
        likes: 8,
        dislikes: 2
      }
    );
    setPosts(updatedPosts);
  }

  // Update the number of likes.
  const handlePostLike = (id) => {
    const updatedPosts = [...posts];
    updatedPosts.forEach((post) => {
      if (post.id === id) {
        post.likes++;
      }
    });
    setPosts(updatedPosts);
  }

  // Update the number of dislikes.
  const handlePostDislike = (id) => {
    const updatedPosts = [...posts];
    updatedPosts.forEach((post) => {
      if (post.id === id) {
        post.dislikes++;
      }
    });
    setPosts(updatedPosts);
  }

  return (
    <main>
      <h2>List of Posts:</h2>
        {posts.map((post, index) => ( 
          <Post 
            key={index} 
            id={post.id}
            title={post.title} 
            likes={post.likes} 
            dislikes={post.dislikes}
            onPostLike={handlePostLike}
            onPostDislike={handlePostDislike}
          />
        ))}
      <button onClick={handleAddPostClick}>Add Post</button>

      <div>
        Total Likes: {totalLikes} | 
        Total Dislikes: {totalDislikes}
      </div>
    </main>
  );
}