import { appName } from './../../includes/variables';
import { ImNewspaper } from 'react-icons/im'
import './styles.scss';

import MainMenu from '../MainMenu';

export default function Header() {

  return (
    
    <>
      <header className='main'>
        <ImNewspaper />
        <div>{appName}</div>
      </header>
      <MainMenu />
    </>
  );

}