import { getCategory, getStatus } from "../../../includes/variables";
import './styles.scss';
import { BiLike, BiDislike } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { likePost, dislikePost, removePost } from "../../../redux/postSlice";
import { Link } from "react-router-dom";
import * as database from "../../../database";

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

}) {

  const { allowLikes, allowDislikes, allowRemove } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleLikeClick = async (event) => {
    event.preventDefault();
    dispatch(likePost(id));

    const data = { likes: likes + 1 };
    const updated = await database.update(id, data);
    console.log('Updated:', updated);
    if (!updated) {
      alert('Failed to update likes.');
      // TODO: Improve the message to the user.
      // TODO: Create a Redux action to remove one like.
    }
  }

  const handleDislikeClick = async (event) => {
    event.preventDefault();
    dispatch(dislikePost(id));

    const data = { dislikes: dislikes + 1 };
    const updated = await database.update(id, data);
    if (!updated) {
      alert('Failed to update dislikes.');
      // TODO: Improve this.
    }
  }

  const handleRemoveClick = async (event) => {
    event.preventDefault();

    // Remove from Redux store.
    dispatch(removePost(id));

    // Remove from Database.
    const removed = await database.remove(id);
    if (!removed) {
      alert('Failed to remove post.');
      // TODO: Improve this.
    }
  }

  // Inline Styling _ using variables for Class Name
  const promoteStyle = promote
    ? 'promote-yes'
    : 'promote-no';

  let rateClassName = 'rate';

  let removeClassName = 'remove'
  if (!allowLikes || !allowDislikes) {
    rateClassName += ' rate-single-button';
  }

  return (

    <Link to={'/posts/' + id} className="post-component">
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

      {(allowRemove) && (
        <div className={removeClassName}>
          {allowRemove && (
            <button
              title='I want to remove this'
              className='delete'
              onClick={handleRemoveClick}
            >
              Remove
            </button>
          )}
        </div>
      )}
    </Link>

  );

} 