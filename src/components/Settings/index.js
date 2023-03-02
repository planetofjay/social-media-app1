import './styles.scss';

export default function Settings() {

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
            checked={null}
            onChange={handleAllowLikesClick}
          />
          Allow Likes
        </label>
      </div>

      <div className='field'>
        <label>
          <input
            type='checkbox'
            checked={null}
            onChange={handleAllowDislikesClick}
          />
          Allow Dislikes
        </label>
      </div>

    </div>

  )
  
}