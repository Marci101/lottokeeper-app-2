import { Link } from "react-router-dom";
import ButtonRounded from "../button/ButtonRounded";
import "./navBar.css";

export default function NavBar() {
  return (
    <nav id="nav-bar">
      <ul>
        <li id="logo">
          <Link to="/">LottoKeeper</Link>
        </li>
        <ButtonRounded buttonText="Let's Play!" link="user" color="yellow" />
        <ButtonRounded buttonText="Admin" link="admin" color="black" />
      </ul>
    </nav>
  );
}
