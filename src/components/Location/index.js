import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15195.491366647835!2d83.3523196!3d17.7976723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5405c376ff20c3b7!2sDr.%20Y.S.R.%20ACA%20VDCA%20Cricket%20Stadium!5e0!3m2!1sen!2sin!4v1594381265471!5m2!1sen!2sin"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
