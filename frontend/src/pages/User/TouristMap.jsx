// src/Map.js
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const TouristMap = () => {
  return (
    <div className="p-10">
      <MapContainer
        center={[-6.666666, 110.903090]}
        zoom={14}
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
      </MapContainer>
    </div>
  );
};

export default TouristMap;
