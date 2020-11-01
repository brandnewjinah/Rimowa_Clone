import React, { Component } from "react";
import "./MainWrapper.scss";

class MainWrapper extends Component {
  state = {};

  render() {
    return (
      <div className="MainWrapper">
        <div className="wrapper-item">
          <p className="wrapper-collection">{this.props.collection}</p>
          <img src={this.props.img_url} alt="1_ORIGINAL.png"></img>
          <p className="wrapper-title">{this.props.title}</p>
          <ul>
            {this.props.colorPalette.map((color, idx) => {
              // console.log("idx", idx, color);
              return (
                <li>
                  <div
                    className="colorItem"
                    style={{ backgroundColor: color }}
                  ></div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MainWrapper;
