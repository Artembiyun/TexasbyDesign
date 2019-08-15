import React, { Component } from "react";
import styles from "./index.module.scss";
import headerTitle from "../../Assets/images/Image40@2x.png";

class HeroLander extends Component {
  render() {
    return (
      <div className={styles.lander}>
        <div className={styles.header}>
          <img
            className={styles.header__Image}
            src={headerTitle}
            alt="Texas by Design Contest"
          />
        </div>
      </div>
    );
  }
}

export default HeroLander;
