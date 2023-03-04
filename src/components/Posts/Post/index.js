import { getCategory, getStatus } from "../../../includes/variables";
import './styles.scss';
import { BiLike, BiDislike } from "react-icons/bi";
import { useSelector } from "react-redux";

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
  const { allowLikes, allowDislikes } = useSelector((state) => state.settings);

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

  let rateClassName = 'rate';
  if (!allowLikes || !allowDislikes) {
    rateClassName += ' rate-single-button';
  }

  return (
    
    <div className="post-component">
      <h3>{title}</h3>

      <div className="description">
        <img src={picture} alt={title} />
        <span>{description}</span>
      </div>

      <div className="info">
        <div>
          Category:
          <strong>{getCategory(category)}</strong>
        </div>
        <div>
          Status:
          <strong>{getStatus(status)}</strong>
        </div>
        <div className={promoteStyle}>
          Promote:
          <strong>{promote ? 'Yes' : 'No'}</strong>
        </div>
      </div>

      {(allowLikes || allowDislikes) && (
        <div className={rateClassName}>
          {allowLikes && (
            <button 
              title='I like this'
              className='like'
              onClick={handleLikeClick}
            >
              <BiLike /> {likes}
            </button>
          )}

          {allowDislikes && (
            <button
              title='I dislike this'
              className="dislike"
              onClick={handleDislikeClick}
            >
              <BiDislike /> {dislikes}
            </button>
          )}
        </div>
      )}

    </div>

  );

} 