import './styles.scss';

export default function MainMenu() {
  return (

    <nav className='main'>
      <a href='/'>Home</a>
      <a href='/posts'>Posts</a>
      <a href='/preferences'>Preferences</a>
      <a href='/about-us'>About us</a>
    </nav>

  );
}