import Post from "./Post";
import './styles.scss';

export default function Posts() {

  const posts = []; // TODO: replace this

  // Sum up the total of likes and dislikes.
  let totalLikes = 0;
  let totalDislikes = 0;

  posts.forEach((post) => {
    totalLikes += post.likes;
    totalDislikes += post.dislikes;
  });

  return (

    <main className="post-list">
      
      {posts.map((post, index) => ( 
        <Post 
          key={index} 
          {...post}
        />
      ))}

      <div className="total-rate">
        Total Likes: {totalLikes} | 
        Total Dislikes: {totalDislikes}
      </div>

    </main>

  );
}