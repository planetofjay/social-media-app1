import Header from "./components/Header";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { useState } from "react";
import uuid from "react-uuid";

export default function App() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Data sent!');
  // }

  // const handleClick = () => {
  //   console.log('Button clicked');
  // }
  const [posts, setPosts] = useState([]);

  const handleAddPost = (title, description, category, promote, status, picture) => {
    const updatedPosts = [...posts];
    updatedPosts.push(
      {
        id: uuid(),
        title,
        description,
        category,
        promote,
        status,
        picture,
        likes: 0,
        dislikes: 0
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
    <>
      <Header />
      <Posts 
        posts={posts} 
        onPostLike={handlePostLike}
        onPostDislike={handlePostDislike}
      />
      <Form 
        onAddPost={handleAddPost}
      />
      <Footer />
    </>
  );
}