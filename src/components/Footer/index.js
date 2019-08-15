import React, { Component } from "react";
import styles from "./index.module.scss";
import Modal from "react-responsive-modal";

import alessandra from "../../Assets/images/logos/AlessandraLogo.png";
import cityLine from "../../Assets/images/logos/Group 13.png";
import travelTexas from "../../Assets/images/logos/Image 39.png";
import visitHouston from "../../Assets/images/logos/visithouston.png";
import wacoLogo from "../../Assets/images/logos/WacoLogo.png";
import rogersMedia from "../../Assets/images/rogersmedia.png";

class Footer extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div id={styles.footer}>
        <div className={styles.logoContainer}>
          <a href="https://www.traveltexas.com/">
            <img
              src={travelTexas}
              className={styles.logoContainer__logo}
              alt="Travel Texas"
              width="126px"
              height="78px"
            />
          </a>
          <a href="https://www.visithoustontexas.com/">
            <img
              src={visitHouston}
              className={styles.logoContainer__logo}
              alt="Visit Huston"
              width="207px"
              height="20px"
            />
          </a>
          <a href="http://www.wacoheartoftexas.com/">
            <img
              src={wacoLogo}
              className={styles.logoContainer__logo}
              alt="Waco Heart of Texas"
              width="160px"
              height="80px"
            />
          </a>
          <a href="https://www.hotelalessandra-houston.com/">
            <img
              src={alessandra}
              className={styles.logoContainer__logo}
              alt="Hotel Alessandra"
              width="152px"
              height="215px"
            />
          </a>
          <a href="https://www.cityline.tv/">
            <img
              src={cityLine}
              className={styles.logoContainer__logo}
              alt="CityLine"
              width="153px"
              height="58px"
            />
          </a>
        </div>
        <div className={styles.rulesContainer}>
          <p className={styles.rulesText}>
            <a href="/#" onClick={this.onOpenModal}>
              Rules & Regulations{" "}
            </a>
            <Modal open={open} onClose={this.onCloseModal} center>
              <h3>Rules and Regulations</h3>
              <p>
                Lorem ipsum dolor sit amet, duo porro dicit conceptam ei, vero
                propriae duo ad, est docendi adversarium ea. Ne vim iuvaret
                vocibus consectetuer. Sed in case altera, feugiat appetere
                repudiare duo te. Eam numquam indoctum eu, cu vim erant iudico
                consectetuer. Nisl posse torquatos ea his, tempor graecis
                deleniti pro eu, ea illum pericula disputationi mea. Ex debet
                luptatum pri, illum tantas nostrud vim in.
              </p>
            </Modal>
            <a href="http://www.rogersmedia.com/privacy/">Privacy Policy </a>
          </p>
          <p className={styles.rulesText}>
            *No purchase necessary. Contest closes XXX at 11:59PM EST. TKTKTKT
            See full contest rules and regulations for more details.{" "}
          </p>

          <img src={rogersMedia} alt="Rogers Media all right reserved." />
        </div>
      </div>
    );
  }
}

export default Footer;
