import { getCategory, getStatus } from "../../../includes/variables";
import './styles.scss';

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
  
  // Inline Styling _ using variables for Class Name
  const promoteStyle = promote 
    ? 'promote-yes' 
    : 'promote-no';

  const dislikeStyle = dislikes >= 10
    ? 'too-many-dislikes'
    : '';

  return (
    <div className="post-component">
      <h3>{title}</h3>
      <img src={picture} alt={title} width={100} />
      <div className='post-text'>{description}</div>
      <div>Category: {getCategory(category)}</div>
      <div className='post-text'>Status: {getStatus(status)}</div>
      <div className={promoteStyle}>
        Promote: 
        <strong>{promote ? 'Yes' : 'No'}</strong>
      </div>

      <div>Likes: {likes}</div>
      <button onClick={handleLikeClick}>Like</button>

      <div 
        className={dislikeStyle}
        style={{ fontSize: 10 + dislikes }}
      >
        Dislikes: {dislikes}
      </div>
      <button onClick={handleDislikeClick}>Dislike</button>
    </div>
  );
} 