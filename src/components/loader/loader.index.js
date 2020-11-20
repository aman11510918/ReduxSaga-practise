import React, { Component } from "react";
import "./loader.style.css";

export default class Loader extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="spinner">
          <div className="ball-1"></div>
          <div className="ball-2"></div>
          <div className="ball-3"></div>
        </div>
      </div>
    );
  }
}
