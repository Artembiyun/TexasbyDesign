import React, { Component } from "react";
import Helmet from "react-helmet";
import HeroLander from "./components/Herolander";
import WinATrip from "./components/Winatrip";
import Details from "./components/Details";
import Footer from "./components/Footer";
import { loadReCaptcha } from "react-recaptcha-google";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    loadReCaptcha();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Discover Texas</title>
        </Helmet>
        <HeroLander />
        <WinATrip />
        <Details />
        <Footer />
      </div>
    );
  }
}

export default App;
