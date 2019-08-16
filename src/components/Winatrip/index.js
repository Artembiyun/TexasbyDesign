import React, { Component } from "react";
import styles from "./index.module.scss";

import houstonImg from "../../Assets/images/Mask Group 33.png";
import wacoImg from "../../Assets/images/Mask Group 34.png";

class WinATrip extends Component {
  render() {
    return (
      <div id={styles.tripmodule}>
        <div className={styles.banner}>
          <h5>YOU COULD</h5>
          <div className={styles.banner__winATrip}>
            <h2 style={styles.dispInline}>WIN</h2>
            <p style={styles.asteriskstyle}>*</p>
            <h2 style={styles.dispInline}> A TRIP</h2>
          </div>
          <h3 style={{ textAlign: "center" }}>
            to experience the arts, culture, and diversity of Texas!
          </h3>
          <h4 style={{ textAlign: "center" }}>
            Courtesy of Travel Texas and Cityline
          </h4>
        </div>
        <div className={styles.destinations}>
          <div className={styles.destinations}>
            <div className={styles.destinations__container}>
              <div className={styles.destinations__container__circle}>
                <img src={houstonImg} alt="Houston Texas" width="100%" />
                <a
                  className={styles.explorebttn}
                  href="https://www.visithoustontexas.com/"
                >
                  EXPLORE
                </a>
                <h2 className={styles.cityLogo}>HOUSTON</h2>
              </div>
              <div className={styles.destinations__container__textBox}>
                <p className={styles.destinationDesc}>
                  America’s fourth-largest city is a cosmopolitan destination,
                  filled with world-class dining, arts, hotels, shopping, and
                  nightlife. There’s always something to do in this Southern
                  hospitality meets chic urban city.
                </p>
              </div>
            </div>
            <div className={styles.destinations__container}>
              <div className={styles.destinations__container__circle}>
                <img src={wacoImg} alt="Waco Texas" width="100%" />
                <a
                  className={styles.explorebttn}
                  href="http://www.wacoheartoftexas.com/"
                >
                  EXPLORE
                </a>
                <h2 className={styles.cityLogo}>WACO</h2>
              </div>
              <div className={styles.destinations__container__textBox}>
                <p className={styles.destinationDesc}>
                  Mountain bike or hike in Cameron Park, shop downtown where
                  you’ll find Magnolia Market, antiques stores, and wonderful
                  local finds. Come for a relaxing getaway, and experience all
                  that Waco has to offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WinATrip;
