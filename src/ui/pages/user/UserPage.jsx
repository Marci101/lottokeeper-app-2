import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../../common/features/modalSlice";
import YourBalance from "../../components/balance/YourBalance";
import ButtonRounded from "../../components/button/ButtonRounded";
import GenerateNums from "../../components/userGenerate/GenerateNums";
import "./userPage.css";

export default function UserPage() {
  const userName = useSelector((state) => state.yourName.userName);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!userName) {
      dispatch(showModal({isOpen: true, message: "Welcome, Fortune Hunter!\nPlease, enter your name first!", withInputField: true}));
    }
  }, []);

  return (
    <div id="user-page">
      <section id="group-buttons">
        <ul>
          <ButtonRounded buttonText="Your Account" link="account" />
          <ButtonRounded buttonText="Your Numbers" link="numbers" />
        </ul>
      </section>
      <YourBalance />
      <section id="guess-nums">
        <div id="user-name">
          <p>Let&apos;s go,&nbsp;</p>
          <p id="nickname">{userName ? `${userName}!` : "Fortune Hunter!"}</p>
        </div>
        <p>Guess the Winning Numbers!</p>
        <p>Choose from <span>1</span> to <span>39</span>!</p>
        <GenerateNums />
      </section>
    </div>
  );
}
