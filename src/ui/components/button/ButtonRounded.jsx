import { Link } from 'react-router-dom';
import './buttonRounded.css';

export default function ButtonRounded(props) {
  const { buttonText, link, color } = {...props};
  
  return (
    <li className={`button-rounded ${color ? color : "" }`} >
      <Link to={link}>
        {buttonText}
      </Link>
    </li>
  )
}