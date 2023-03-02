import { appName } from './../../includes/variables';
import { ImNewspaper } from 'react-icons/im'
import './styles.scss';

export default function Header() {
  return (

    <header className='main'>
      <ImNewspaper />
      <h1>{appName}</h1>
    </header>
    
  );
}