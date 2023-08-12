// ContactUs.js

import React, { useEffect } from "react";

const ContactUsMap = () => {
  let YOUR_LATITUDE = 33.74974;
  let YOUR_LONGITUDE = -117.86978;
  useEffect(() => {
    // Load Google Maps API script dynamically
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBl68bNf0HPDdC3Vm1DCaRRV14zvXNhzUs&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Initialize Google Maps in the window scope
    window.initMap = initMap;
  }, []);

  const initMap = () => {
    const mapOptions = {
      center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }, // Replace with your desired location coordinates
      zoom: 15 // Adjust the zoom level as needed
    };

    const map = new window.google.maps.Map(
      document.getElementById("map"),
      mapOptions
    );

    // Add a marker to the map
    new window.google.maps.Marker({
      position: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }, // Replace with the same coordinates used above
      map: map,
      title: "Our Location" // Replace with your desired marker title
    });
  };

  return (
    <div className="container">
      <form action="#" method="post">
        {/* Your form elements here */}
      </form>

      {/* Google Maps will be rendered inside this div */}
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default ContactUsMap;
