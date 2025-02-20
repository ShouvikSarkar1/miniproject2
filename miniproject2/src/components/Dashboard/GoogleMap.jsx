import React, { useEffect, useRef, useState } from "react";

const GoogleMapDirections = () => {
  const mapRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (window.google) {
        setScriptLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  useEffect(() => {
    if (!scriptLoaded) return;

    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 34.0522, lng: -118.2437 }, // Default center
        zoom: 7,
      });

      const directionsServiceInstance = new window.google.maps.DirectionsService();
      const directionsRendererInstance = new window.google.maps.DirectionsRenderer();
      directionsRendererInstance.setMap(map);

      setDirectionsService(directionsServiceInstance);
      setDirectionsRenderer(directionsRendererInstance);

      // Enable Places Autocomplete for inputs
      const startInput = document.getElementById("startLocation");
      const destInput = document.getElementById("destination");

      if (window.google.maps.places) {
        new window.google.maps.places.Autocomplete(startInput);
        new window.google.maps.places.Autocomplete(destInput);
      }
    };

    initMap();
  }, [scriptLoaded]);

  const calculateRoute = () => {
    if (!directionsService || !directionsRenderer) {
      console.error("Google Maps API is not ready.");
      return;
    }

    if (!startLocation || !destination) {
      alert("Please enter both a starting location and a destination.");
      return;
    }

    directionsService.route(
      {
        origin: startLocation,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error("Error fetching directions:", status);
        }
      }
    );
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <div className="map-controls">
        <input
          id="startLocation"
          type="text"
          placeholder="Enter starting location"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
        />
        <input
          id="destination"
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={calculateRoute}>Get Directions</button>
      </div>
      <div id="map" style={{ width: "100%", height: "500px" , border: '2px solid #ff7b00'}} />
    </div>
  );
};

export default GoogleMapDirections;
