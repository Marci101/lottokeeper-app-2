import ButtonRounded from "../../components/button/ButtonRounded";
import "./homePage.css";

export default function HomePage() {
  return (
    <div id="home-page">
      <p>Welcome to the Lottery of LottoKeeper!</p>
      <p id="main-prize">Grab the chance and aim the Top Prize!</p>
      <p>Don&apos;t stop!</p>
      <ul>
        <ButtonRounded buttonText="Go further!" link="user" />
      </ul>
    </div>
  );
}