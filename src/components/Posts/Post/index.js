
export default function Post({ 
  id, 
  title, 
  likes, 
  dislikes, 
  onPostLike, 
  onPostDislike 
}) {
  const handleLikeClick = () => {
    onPostLike(id);
    // Properties are read-only variables!
  }

  const handleDislikeClick = () => {
    onPostDislike(id);
  }

  return (
    <div>
      <h3>{title}</h3>

      <div>Likes: {likes}</div>
      <button onClick={handleLikeClick}>Like</button>

      <div>Dislikes: {dislikes}</div>
      <button onClick={handleDislikeClick}>Dislike</button>
    </div>
  );
} 