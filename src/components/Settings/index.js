import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAllowLikes, toggleAllowDislikes } from '../../redux/settingsSlice';

export default function Settings() {

  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleAllowLikesClick = () => {
    dispatch(toggleAllowLikes());
  }

  const handleAllowDislikesClick = () => {
    dispatch(toggleAllowDislikes());
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
          Allow Likes
        </label>
      </div>

      <div className='field'>
        <label>
          <input
            type='checkbox'
            checked={settings.allowDislikes}
            onChange={handleAllowDislikesClick}
          />
          Allow Dislikes
        </label>
      </div>

    </div>

  )
  
}