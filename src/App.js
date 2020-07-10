import React from "react";

import "./resources/styles.css";

import { Element } from "react-scroll";

import Header from "./components/header_footer/header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Highlights from "./components/highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/header_footer/Footer";

function App() {
  return (
    <div
      className="App"
      style={{ height: "1400px", background: "cornflowerblue" }}
    >
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="VenueInfo">
        <VenueInfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
