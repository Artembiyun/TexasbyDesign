import React, { Component } from "react";
import styles from "./index.module.scss";

import Form from "../Form";

class Details extends Component {
  render() {
    return (
      <div id={styles.contestBox}>
        <div className={styles.container}>
          <div className={styles.container__details}>
            <h3 className={styles.grandPrize}>GRAND PRIZE INCLUDES:</h3>
            <ul className={styles.grandPrizeList}>
              <li>
                <p>Return airfare Economy Class to Houston, Texas</p>
              </li>
              <li>
                <p>$300 Visa Gift Card towards car rental</p>
              </li>
              <li>
                <p>
                  <b>In Houston:</b> Three nights at Hotel Allesandra, gift
                  certificates for an architectural tour, dinner at Xochi &
                  Houston CityPASS
                </p>
              </li>
              <li>
                <p>
                  <b>In Waco:</b> Three nights in a home that has been featured
                  on a popular TV show plus an autographed copy of The Magnolia
                  Story, tickets to museums, historic sites, restaurants & a
                  $250 gift certificate to Magnolia Market
                </p>
              </li>
            </ul>
            <hr />
          </div>
          <Form />
        </div>
      </div>
    );
  }
}

export default Details;
