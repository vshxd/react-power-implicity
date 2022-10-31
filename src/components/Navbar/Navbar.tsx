import "./navbar.scss";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__icon--wrapper">
        <a className="navbar__icon" href="#">
          <LogoIcon />
        </a>
      </div>

      <div className="navbar__link--wrapper">
        <a className="navbar__link" href="#">
          Features
        </a>
        <a className="navbar__link" href="#">
          Partners
        </a>
        <a className="navbar__link" href="#">
          Stories
        </a>
      </div>

      <div className="navbar__button">
        <button className="navbar__btn btn">Download for free</button>
      </div>

      {/* <div className="burger">
                <span></span>
            </div> */}

      <div className="burger">
        <div className="burger-line first"></div>
        <div className="burger-line second"></div>
        <div className="burger-line third"></div>
        <div className="burger-line fourth"></div>
      </div>
    </div>
  );
};
