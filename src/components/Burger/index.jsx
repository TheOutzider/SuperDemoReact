import React from "react";
import Logo from "../../assets/svg/TSM.png";
import { List } from "react-bootstrap-icons";

class MenuBurger extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    let className = this.state.isOpen ? "open" : "closed";
    let LogoZone = this.state.isOpen ? "logoZone__open" : "logoZone__close";
    return (
      <div>
        <div className={LogoZone} onClick={this.handleClick}>
          <img id="logo" src={Logo} alt="Logo" />
          <List className="burger" />
        </div>
        <ul>
          <li id={className} style={{ "--i": 1 }}>
            {" "}
            <a
              id={className}
              style={{ "--i": 2 }}
              href="https://github.com/TheOutzider"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li id={className} style={{ "--i": 2 }}>
            <a
              id={className}
              style={{ "--i": 3 }}
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=OutziderYT@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              E-mail
            </a>
          </li>
          <li id={className} style={{ "--i": 3 }}>
            <a
              id={className}
              style={{ "--i": 5 }}
              href="/contact"
              target="_blank"
              rel="noreferrer"
            >
              The Dark Book
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuBurger;
