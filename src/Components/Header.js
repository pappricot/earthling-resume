import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const changingText = ["Works?", "Works!", "WooHoo!"];
let index = 0;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changingText: ["1", "2", "3", " Hello Earthlings"],
      index: 0
    };
  }

  // componentDidMount() {
  //   this.handleChangingText();
  // }

  // handleChangingText = () => {
  //   // this.state.changingText.map((word, index) => {
  //   //   index = index + 1 > 2 ? 0 : ++index + 1;
  //   //   setInterval(word[index], 3000);
  //   // });
  //   setInterval(() => {
  //     index = this.state.index + 1 > 2 ? 0 : ++this.state.index + 1;
  //     this.setState({ changingTetx: this.state.changingText[index] });
  //   }, 5000);
  //   return changingText;
  // };

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className} />
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              <ReactTypingEffect text="Hello Earthlings" eraseDelay="2500" />
            </h1>
            <h3>This website belongs to a {occupation}.</h3>

            <h3>
              {description}
              <FontAwesomeIcon icon={faCoffee} />.
            </h3>

            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
