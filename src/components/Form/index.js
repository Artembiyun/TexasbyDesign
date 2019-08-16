import React, { Component } from "react";
import styles from "./index.module.scss";
import ReCaptcha from "../Recaptcha/index.js";
import Modal from "react-responsive-modal";

class Form extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.state = {
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        province: "",
        postalCode: "",
        phoneNumber: "",
        email: "",
        TTinfo: false,
        CitylineOffers: false
    };
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

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === "select" ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
    this.validateForm();
  }

  handleCheckboxChange(e) {
    const target = e.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  callbacktest = (data) => {
    console.log('look we got it ma!' + data);
    this.setState({captcha:data})
  }

  submit(e) {
    e.preventDefault();
    console.log(
      "Thank you " +
        this.state.firstName +
        " for entering the Texas by Design Contest!"
    );
    const formSubmitted = true;
    
    this.setState({
        formSubmitted
      });
  }

  validateForm() {
    const alphabeticRegEx = /^[a-zA-Z() ]+$/;
    const postalCodeRegEx = /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)/;
    const phoneNumberRegEx = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    const emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
     if(this.state.firstName){
       if(!this.state.firstName.match(alphabeticRegEx)){
         this.setState({
          nameErr: true
         });
       }
       else{
         this.setState({
          nameErr: false
         });
       }
     }
     if(this.state.lastName){
      if(!this.state.lastName.match(alphabeticRegEx)){
        this.setState({
         lNameErr: true
        });
      }
      else{
        this.setState({
         lNameErr: false
        });
      }
    }
    if(this.state.city){
      if(!this.state.city.match(alphabeticRegEx)){
        this.setState({
         cityErr: true
        });
      }
      else{
        this.setState({
         cityErr: false
        });
      }
    }
    if(this.state.postalCode){
      if(!this.state.postalCode.match(postalCodeRegEx)){
        this.setState({
         pCodeErr: true
        });
      }
      else{
        this.setState({
         pCodeErr: false
        });
      }
    }
    if(this.state.phoneNumber){
      if(!this.state.phoneNumber.match(phoneNumberRegEx)){
        this.setState({
         pNumberErr: true
        });
      }
      else{
        this.setState({
         pNumberErr: false
        });
      }
    }
    if(this.state.email){
      if(!this.state.email.match(emailRegEx)){
        this.setState({
         emailErr: true
        });
      }
      else{
        this.setState({
         emailErr: false
        });
      }
    }
  }

  render() {
    const { open } = this.state;
    return (
      <div>
      { this.state.formSubmitted ? 
      <div className={styles.completionBox}>
        <h2>Thank You</h2>
        <h3>We have recieved your contest entry</h3>
      </div>
    : (
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
                onChange={this.handleInputChange}
                value={this.state.firstName}
                maxLength="150"
                placeholder=""
                required
                aria-describedby="firstName"
                pattern="^[a-zA-Z() ]+$"
              />
              { this.state.nameErr ? (
              <div className={styles.feedbackBox} id="firstName_feedbackBox">
                <span
                  className={styles.feedbackBox__span}
                  id="firstName_feedback"
                >This field contains invalid characters. Please make sure to use only alphabetic characters, spaces, hyphens and periods</span>
              </div>) : 
              null  
            }
            </li>
            <li className={styles.field}>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={this.handleInputChange}
                value={this.state.lastName}
                maxLength="150"
                placeholder=""
                required
                aria-describedby="lastName"
                pattern="^[a-zA-Z() ]+$"
              />
              { this.state.lNameErr ? (
              <div className={styles.feedbackBox} id="lastName_feedbackBox">
                <span
                  className={styles.feedbackBox__span}
                  id="lastName_feedback"
                >This field contains invalid characters. Please make sure to use only alphabetic characters, spaces, hyphens and periods</span>
              </div>) : null}
            </li>
            <li className={styles.field + " " + styles.long}>
              <label>Address Line 1</label>
              <input
                type="text"
                name="address1"
                onChange={this.handleInputChange}
                value={this.state.address1}
                maxLength="50"
                placeholder=""
                required
                aria-describedby="address1"
              />
            </li>
            <li className={styles.field + " " + styles.long}>
              <label>
                Address Line 2 <p className={styles.optional}>(Optional)</p>
              </label>
              <input
                type="text"
                name="address2"
                onChange={this.handleInputChange}
                value={this.state.address1}
                maxLength="50"
                placeholder=""
                aria-describedby="address2"
              />
            </li>
            <li className={styles.field + " " + styles.field__padded}>
              <label>City</label>
              <input
                type="text"
                name="city"
                onChange={this.handleInputChange}
                value={this.state.city}
                maxLength="25"
                placeholder=""
                required
                aria-describedby="city"
                pattern="^[a-zA-Z() ]+$"
              />
              { this.state.cityErr ? (
              <div className={styles.feedbackBox} id="city_feedbackBox">
                <span className={styles.feedbackBox__span} id="city_feedback" >This field contains invalid characters. Please make sure to use only alphabetic characters, spaces, hyphens and periods</span>
              </div>) : null}
            </li>
            <li className={styles.field}>
              <label>Province</label>
              <select
                name="province"
                type="select"
                value={this.state.province}
                onChange={this.handleInputChange}
                required
                aria-describedby="province"
              >
                <option value="" />
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">
                  Newfoundland and Labrador
                </option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
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
                onChange={this.handleInputChange}
                value={this.state.postalCode}
                placeholder=""
                required
                aria-describedby="postalCode"
                pattern="([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)"
              />
              { this.state.pCodeErr ? (
              <div className={styles.feedbackBox} id="postalCode_feedbackBox">
                <span
                  className={styles.feedbackBox__span}
                  id="postalCode_feedback"
                >This field is in the wrong format. Use the format H0H0H0 instead</span>
              </div>) : null}
            </li>
            <br />
            <li className={styles.field + " " + styles.field__padded}>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                onChange={this.handleInputChange}
                value={this.state.phoneNumber}
                maxLength="14"
                placeholder=""
                required
                pattern="(?:\(?)(\d{3})(?:\)?)(\s|\.|-)?(\d{3})(\s|\.|-)?(\d{4})"
                aria-describedby="phone"
              />
              { this.state.pNumberErr ? 
              <div className={styles.feedbackBox} id="phoneNumber_feedbackBox">
                <span
                  className={styles.feedbackBox__span}
                  id="phoneNumber_feedback"
                >This field is in the wrong format. Use the format 111-111-1111 instead</span>
              </div> : null}
            </li>
            <li className={styles.field + " " + styles.field__padded}>
              <label>Email Address</label>
              <input
                name="email"
                type="email"
                onChange={this.handleInputChange}
                value={this.state.email}
                maxLength="50"
                placeholder=""
                required
                aria-describedby="email"
                pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              />
              {this.state.emailErr ? (
              <div className={styles.feedbackBox} id="email_feedbackBox">
                <span
                  className={styles.feedbackBox__span}
                  id="email_feedback"
                >This field is in the wrong format. Use the format email@address.com instead</span>
              </div>) : null}
            </li>
          </ol>

          <ol>
            <li className={styles.checkboxList}>
              <label className="control control-checkbox">
                <input
                  type="checkbox"
                  name="TTinfo"
                  checked={this.state.TTinfo}
                  onChange={this.handleCheckboxChange}
                />
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
                <input
                  type="checkbox"
                  name="CitylineOffers"
                  checked={this.state.CitylineOffers}
                  onChange={this.handleCheckboxChange}
                />
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
          <ReCaptcha callbacktest={this.reCaptchaConfirm} />
          <input
            className={styles.submit}
            id="submitButton"
            type="submit"
            value="Submit"
          />
        </form>}
      </div>)}
      </div>
    );
  }
}

export default Form;
