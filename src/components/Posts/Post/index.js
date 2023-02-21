import { getCategory, getStatus } from "../../../includes/variables";

export default function Post({ 
  id, 
  title, 
  description,
  category,
  promote,
  status,
  picture,
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
      <img src={picture} alt={title} width={100} />
      <div>{description}</div>
      <div>Category: {getCategory(category)}</div>
      <div>Status: {getStatus(status)}</div>
      <div>Promote: {promote ? 'Yes' : 'No'}</div>

      <div>Likes: {likes}</div>
      <button onClick={handleLikeClick}>Like</button>

      <div>Dislikes: {dislikes}</div>
      <button onClick={handleDislikeClick}>Dislike</button>
    </div>
  );
} 