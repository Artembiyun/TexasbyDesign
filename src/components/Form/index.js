import React, { Component } from "react";
import styles from "./index.module.scss";
import ReCaptcha from "../Recaptcha/index.js";
import Modal from "react-responsive-modal";

class Form extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  submit(e) {
    e.preventDefault();
    let user = this.validateForm();
    if (user !== false) {
      //this is where the post request would go
      this.submitSuccess();
      console.log(
        "Thank you " +
          user.firstName +
          " for entering the Texas by Design Contest!"
      );
    }
  }

  submitSuccess() {
    document.getElementById("submitButton").style.pointerEvents = "none";
    document.getElementById("submitButton").style.backgroundColor = "orange";
    document.getElementById("submitButton").value = "Thank you";
  }

  validateForm() {
    //regular expressions for validation
    let alphabeticRegEx = /^[a-zA-Z() ]+$/;
    let postalCodeRegEx = /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)/;
    let phoneNumberRegEx = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    let emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let address1 = document.getElementById("address1").value;
    let address2 = document.getElementById("address2").value;
    let city = document.getElementById("city").value;
    let province = document.getElementById("province").value;
    let postalCode = document.getElementById("postalCode").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    let TTinfo = document.getElementById("TTinfo").checked;
    let CitylineOffers = document.getElementById("CitylineOffers").checked;

    let validated = true;

    //validates form inputs with .match(regex)
    //if form input invalid, validated becomes false and form does not submit
    if (!firstName.match(alphabeticRegEx)) {
      document.getElementById("firstName_feedbackBox").style.display = "block";
      document.getElementById("firstName_feedback").innerHTML =
        "This field contains invalid characters. Please make sure to use only alphabetic characters, spaces, hyphens and periods";
      validated = false;
    } else {
      document.getElementById("firstName_feedbackBox").style.display = "none";
      document.getElementById("firstName_feedback").innerHTML = "";
    }
    if (!lastName.match(alphabeticRegEx)) {
      document.getElementById("lastName_feedbackBox").style.display = "block";
      document.getElementById("lastName_feedback").innerHTML =
        "This field contains invalid characters. Please make sure to use only alphabetic characters, spaces, hyphens and periods";
      validated = false;
    } else {
      document.getElementById("lastName_feedbackBox").style.display = "none";
      document.getElementById("lastName_feedback").innerHTML = "";
    }
    if (!city.match(alphabeticRegEx)) {
      document.getElementById("city_feedbackBox").style.display = "block";
      document.getElementById("city_feedback").innerHTML =
        "This field contains invalid characters. Please make sure to use only alphabetic characters";
      validated = false;
    } else {
      document.getElementById("city_feedbackBox").style.display = "none";
      document.getElementById("city_feedback").innerHTML = "";
    }
    if (!postalCode.match(postalCodeRegEx)) {
      document.getElementById("postalCode_feedbackBox").style.display = "block";
      document.getElementById("postalCode_feedback").innerHTML =
        "This field is in the wrong format. Use the format H0H0H0 instead";
      validated = false;
    } else {
      document.getElementById("postalCode_feedbackBox").style.display = "none";
      document.getElementById("postalCode_feedback").innerHTML = "";
    }
    if (!phoneNumber.match(phoneNumberRegEx)) {
      document.getElementById("phoneNumber_feedbackBox").style.display =
        "block";
      document.getElementById("phoneNumber_feedback").innerHTML =
        "This field is in the wrong format. Use the format 111-111-1111 instead";
      validated = false;
    } else {
      document.getElementById("phoneNumber_feedbackBox").style.display = "none";
      document.getElementById("phoneNumber_feedback").innerHTML = "";
    }
    if (!email.match(emailRegEx)) {
      document.getElementById("email_feedbackBox").style.display = "block";
      document.getElementById("email_feedback").innerHTML =
        "This field is in the wrong format. Use the format email@address.com instead";
      validated = false;
    } else {
      document.getElementById("email_feedbackBox").style.display = "none";
      document.getElementById("email_feedback").innerHTML = "";
    }

    if (validated === true) {
      let formObject = {
        firstName: firstName,
        lastName: lastName,
        address1: address1,
        address2: address2,
        city: city,
        province: province,
        postalCode: postalCode,
        phoneNumber: phoneNumber,
        email: email,
        TTinfo: TTinfo,
        CitylineOffers: CitylineOffers
      };
      return formObject;
    } else {
      return false;
    }
  }

  render() {
    const { open } = this.state;
    return (
      <div className={styles.formsContainer}>
        <div className={styles.formsContainer__prompt}>
          <h3 className={styles.submitText}>
            To enter, Simply fill out the form below and click 'SUBMIT'
          </h3>
          <h6>
            All fields are required, unless marked{" "}
            <p className={styles.optional}>(Optional)</p>
          </h6>
        </div>
        <form onSubmit={this.submit}>
          <ol>
            <li className={styles.field + " " + styles.field__padded}>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                maxLength="150"
                placeholder=""
                required
                aria-describedby="firstName_feedback"
              />
              <div className={styles.feedbackBox} id="firstName_feedbackBox">
                <span
                  className={styles.feedbackBox__span}
                  id="firstName_feedback"
                />
              </div>
            </li>
            <li className={styles.field}>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                maxLength="150"
                placeholder=""
                required
                aria-describedby="lastName_feedback"
              />
              <div className={styles.feedbackBox} id="lastName_feedbackBox">
                <span
                  className={styles.feedbackBox__span}
                  id="lastName_feedback"
                />
              </div>
            </li>
            <li className={styles.field + " " + styles.long}>
              <label>Address Line 1</label>
              <input
                type="text"
                name="address1"
                id="address1"
                maxLength="50"
                placeholder=""
                required
                aria-describedby="address1_feedback"
              />
            </li>
            <li className={styles.field + " " + styles.long}>
              <label>
                Address Line 2 <p className={styles.optional}>(Optional)</p>
              </label>
              <input
                type="text"
                name="address2"
                id="address2"
                maxLength="50"
                placeholder=""
                aria-describedby="address2_feedback"
              />
            </li>
            <li className={styles.field + " " + styles.field__padded}>
              <label>City</label>
              <input
                type="text"
                name="city"
                id="city"
                maxLength="25"
                placeholder=""
                required
                aria-describedby="city_feedback"
              />
              <div className={styles.feedbackBox} id="city_feedbackBox">
                <span className={styles.feedbackBox__span} id="city_feedback" />
              </div>
            </li>
            <li className={styles.field}>
              <label>Province</label>
              <select
                name="province"
                id="province"
                required
                aria-describedby="province_feedback"
              >
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">
                  Newfoundland and Labrador
                </option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario" selected>
                  Ontario
                </option>
                <option value="Prince Edward Island">
                  Prince Edward Island
                </option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
              </select>
            </li>
            <li className={styles.field + " " + styles.field__padded}>
              <label>Postal Code</label>
              <input
                name="postalCode"
                type="text"
                maxLength="7"
                id="postalCode"
                placeholder=""
                required
                aria-describedby="postalCode_feedback"
              />
              <div className={styles.feedbackBox} id="postalCode_feedbackBox">
                <span
                  className={styles.feedbackBox__span}
                  id="postalCode_feedback"
                />
              </div>
            </li>
            <br />
            <li className={styles.field + " " + styles.field__padded}>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                maxLength="14"
                placeholder=""
                required
                pattern="(?:\(?)(\d{3})(?:\)?)(\s|\.|-)?(\d{3})(\s|\.|-)?(\d{4})"
                aria-describedby="phone_feedback"
              />
              <div className={styles.feedbackBox} id="phoneNumber_feedbackBox">
                <span
                  className={styles.feedbackBox__span}
                  id="phoneNumber_feedback"
                />
              </div>
            </li>
            <li className={styles.field + " " + styles.field__padded}>
              <label>Email Address</label>
              <input
                name="email"
                type="email"
                id="email"
                maxLength="50"
                placeholder=""
                required
                aria-describedby="email_feedback"
              />
              <div className={styles.feedbackBox} id="email_feedbackBox">
                <span
                  className={styles.feedbackBox__span}
                  id="email_feedback"
                />
              </div>
            </li>
          </ol>

          <ol>
            <li className={styles.checkboxList}>
              <label className="control control-checkbox">
                <input type="checkbox" id="TTinfo" />
                <div className="control_indicator" />
              </label>
              <div className={styles.checkboxList__text}>
                <p className={styles.optionalb}>(Optional)</p> From time to
                time, <strong>Travel Texas</strong> would like to send you
                information, newsletters and special offers. Would you like to
                receive these? You may withdraw your consent at any time. View
                our{" "}
                <a
                  className={styles.privacyPolicy}
                  href="https://www.traveltexas.com/privacy"
                >
                  Privacy Policy.
                </a>
              </div>
            </li>
            <li className={styles.checkboxList}>
              <label className="control control-checkbox">
                <input type="checkbox" id="CitylineOffers" />
                <div className="control_indicator" />
              </label>
              <div className={styles.checkboxList__text}>
                <p className={styles.optionalb}>(Optional)</p> From time to
                time, <strong>Cityline</strong> would like to send you offers
                and e-newsletters, including information about our latest
                articles, special events, promotions, and more! You may withdraw
                your consent at any time. View our{" "}
                <a
                  className={styles.privacyPolicy}
                  href="http://www.rogersmedia.com/privacy/"
                >
                  Privacy Policy.
                </a>
              </div>
            </li>
            <li className={styles.checkboxList}>
              <label className="control control-checkbox">
                <input type="checkbox" required />
                <div className="control_indicator" />
              </label>
              <div className={styles.checkboxList__text}>
                I have read and agreed to the contest{" "}
                <a
                  href="/#"
                  className={styles.privacyPolicy}
                  onClick={this.onOpenModal}
                >
                  <strong> rules and regulations.</strong>
                </a>
                <Modal open={open} onClose={this.onCloseModal} center>
                  <h3>Rules and Regulations</h3>
                  <p>
                    Lorem ipsum dolor sit amet, duo porro dicit conceptam ei,
                    vero propriae duo ad, est docendi adversarium ea. Ne vim
                    iuvaret vocibus consectetuer. Sed in case altera, feugiat
                    appetere repudiare duo te. Eam numquam indoctum eu, cu vim
                    erant iudico consectetuer. Nisl posse torquatos ea his,
                    tempor graecis deleniti pro eu, ea illum pericula
                    disputationi mea. Ex debet luptatum pri, illum tantas
                    nostrud vim in.
                  </p>
                </Modal>
                <div className={styles.popup} id="popup" />
              </div>
            </li>
          </ol>
          <ReCaptcha />
          <input className={styles.submit} id="submitButton" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
