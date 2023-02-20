import Post from "./Post";

export default function Posts({ posts, onPostLike, onPostDislike }) {

  // Sum up the total of likes and dislikes.
  let totalLikes = 0;
  let totalDislikes = 0;
  posts.forEach((post) => {
    totalLikes += post.likes;
    totalDislikes += post.dislikes;
  });

  return (
    <main>
      <h2>List of Posts:</h2>
        {posts.map((post, index) => ( 
          <Post 
            key={index} 
            {...post}
            onPostLike={onPostLike}
            onPostDislike={onPostDislike}
          />
        ))}

      <div>
        Total Likes: {totalLikes} | 
        Total Dislikes: {totalDislikes}
      </div>
    </main>
  );
}