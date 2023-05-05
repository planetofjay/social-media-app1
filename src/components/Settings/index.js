import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAllowLikes, toggleAllowDislikes, toggleAllowRemove } from '../../redux/settingsSlice';

export default function Settings() {

  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  // Allow Likes btn in preference page
  const handleAllowLikesClick = () => {
    dispatch(toggleAllowLikes());
  }
  // Allow Dislikes btn in preference page
  const handleAllowDislikesClick = () => {
    dispatch(toggleAllowDislikes());
  }
  // Allow Remove btn in preference page
  const handleAllowRemoveClick = () => {
    dispatch(toggleAllowRemove());
  }

  return (

    <div className='settings-component'>
      <h2>Settings</h2>
      
      <div className='field'>
        <label>
          <input
            type='checkbox'
            checked={settings.allowLikes}
            onChange={handleAllowLikesClick}
          />
          Allow Likes btn
        </label>
      </div>

      <div className='field'>
        <label>
          <input
            type='checkbox'
            checked={settings.allowDislikes}
            onChange={handleAllowDislikesClick}
          />
          Allow Dislikes btn
        </label>
      </div>

      <div className='field'>
        <label>
          <input
            type='checkbox'
            checked={settings.allowRemove}
            onChange={handleAllowRemoveClick}
          />
          Allow Remove btn
        </label>
      </div>

    </div>

  )
  
}