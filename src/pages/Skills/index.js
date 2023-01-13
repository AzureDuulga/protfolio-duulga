import React, { Component } from "react";
import Styles from "./style.module.css";

import { Laptop } from "react-bootstrap-icons";

export default class Skills extends Component {
  render() {
    return (
      <div id="Skills" className={Styles.Container}>
        <div className="text-center text-white">
          <Laptop />
          Skills & Abilities
        </div>
      </div>
    );
  }
}
