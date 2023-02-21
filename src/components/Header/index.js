import { appName } from './../../includes/variables';
import { ImNewspaper } from 'react-icons/im'

export default function Header() {
  return (
    <header>
      <ImNewspaper />
      <h1>{appName}</h1>
    </header>
  );
}