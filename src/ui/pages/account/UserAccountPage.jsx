import { useSelector } from 'react-redux';
import ButtonRounded from '../../components/button/ButtonRounded';
import FormYourName from '../../components/form/FormYourName';
import YourBalance from '../../components/balance/YourBalance';
import './userAccountPage.css';

export default function UserAccountPage() {
  const userName = useSelector((state) => state.yourName.userName);

  return (
    <div id="user-account">
      <div id="your-name">
        <p>Your nickname:&nbsp;</p><p id="your-nickname">{userName ? userName : "Fortune Hunter"}</p>
      </div>
      <FormYourName buttonText='Edit' />
      <YourBalance />
      <ul>
        <ButtonRounded buttonText='Back' link='/user' />
      </ul>
    </div>
  );
}
