import './styles.scss';
import { useSelector } from 'react-redux';

export default function Settings() {

  const settings = useSelector((state) => state.settings);

  const handleAllowLikesClick = () => {
    console.log('Allow likes');
  }

  const handleAllowDislikesClick = () => {
    console.log('Allow dislikes');
  }
  
  return (

    <div className='settings-component'>
      <h1>Settings</h1>
      
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