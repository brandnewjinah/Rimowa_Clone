import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavNew from "./Menu/NavNew";
import NavLuggage from "./Menu/NavLuggage";
import NavAccessories from "./Menu/NavAccessories";
import NavGifts from "./Menu/NavGifts";
import NavServices from "./Menu/NavServices";
import "./Nav.scss";

const navMenu = {
  0: <NavNew />,
  1: <NavLuggage />,
  2: <NavAccessories />,
  3: <NavGifts />,
  4: <NavServices />,
};

class Nav extends Component {
  state = {
    menuChacked: undefined,
    id: undefined,
    component: undefined,
  };

  dropMenucheck = (num) => {
    this.setState({ menuChacked: true, id: num, component: navMenu[num] }, () =>
      console.log(this.state.menuChacked, this.state.id)
    );
  };

  leaveckeck = () => {
    this.setState({ menuChacked: false, component: "" });
  };

  goToLuggage = () => {
    this.props.history.push("/products");
  };

  goToAcc = () => {
    this.props.history.push("/accList");
  };

  goToCus = () => {
    this.props.history.push("/Uniquetag");
  };

  render() {
    return (
      <div className="Nav" onMouseLeave={this.leaveckeck}>
        <div className="Nav-box">
          <ul>
            <li className="NEW-btn" onMouseEnter={() => this.dropMenucheck(0)}>
              NEW
            </li>
            <li
              className="LUGGAGE-btn"
              onMouseEnter={() => this.dropMenucheck(1)}
            >
              <div className="BtnLug" onClick={this.goToLuggage}>
                LUGGAGE
              </div>
            </li>
            <li
              className="ACCESSORIES-btn"
              onMouseEnter={() => this.dropMenucheck(2)}
            >
              <div onClick={this.goToAcc}>ACCESSORIES</div>
            </li>
            <li
              className="GIFTS-btn"
              onMouseEnter={() => this.dropMenucheck(3)}
            >
              GIFTS
            </li>
            <li
              className="SERVICES-btn"
              onMouseEnter={() => this.dropMenucheck(4)}
            >
              SERVICES
            </li>
            <li className="CUSTOMISE-btn">
              <div onClick={this.goToCus}>CUSTOMISE</div>
            </li>
          </ul>
        </div>
        <div onMouseLeave={this.leaveckeck}>
          {this.state.menuChacked ? this.state.component : this.state.component}
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
