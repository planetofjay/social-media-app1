import './styles.scss';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  
  return (

    <nav className='main'>
      <Link to='/'>Home</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/preferences'>Preferences</Link>
      <Link to='/about-us'>About Us</Link>
    </nav>

  );

}