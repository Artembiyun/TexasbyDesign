import React, { Component } from "react";
import { ReCaptcha } from "react-recaptcha-google";
class reCaptcha extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  componentDidMount() {
    if (this.captcha) {
      this.captcha.reset();
    }
  }
  onLoadRecaptcha() {
    if (this.captcha) {
      this.captcha.reset();
    }
  }
  verifyCallback(recaptchaToken) {
    this.props.callbacktest(recaptchaToken);
  }
  render() {
    return (
      <div>
        <ReCaptcha
          ref={el => {
            this.captcha = el;
          }}
          size="normal"
          data-theme="dark"
          render="explicit"
          sitekey="6LfuDrMUAAAAAE1J68bydOs9KhJsDFcZJFKW9nBE"
          onloadCallback={this.onLoadRecaptcha}
          verifyCallback={this.verifyCallback}
        />
      </div>
    );
  }
}
export default reCaptcha;
