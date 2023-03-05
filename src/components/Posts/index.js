import Post from "./Post";
import './styles.scss';
import { useSelector } from "react-redux";

export default function Posts() {

  const posts = useSelector((state) => state.post.posts);
  const { allowLikes, allowDislikes } = useSelector((state) => state.settings);

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

      {(allowLikes || allowDislikes) && (
        <div className="total-rate">
          {allowLikes && (
            <>Total Likes: {totalLikes}</>
          )}

          {allowLikes && allowDislikes && (
            <> | </>
          )}

          {allowDislikes && (
            <>Total Dislikes: {totalDislikes}</>
          )}
        </div>
      )}

    </main>

  );
}