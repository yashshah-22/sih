import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import './maps.css';
const center = {
  lat: 12.9716, // Latitude of Bangalore
  lng: 77.5946, // Longitude of Bangalore
};

const ayurvedicCenters = [
  { id: 1, name: 'Center 1', lat: 12.9352, lng: 77.6252, address: 'Jan Aushadi Store, NVG 3rd Cross Rd Bangalore' }, // Example coordinates and address
  { id: 2, name: 'Center 2', lat: 12.9501, lng: 77.6349, address: 'Pradhan Mantri Jan Aushadi Kendra, SGR Towers, Bangalore' }, // Add more centers
  { id: 3, name: 'Center 3', lat: 12.9352, lng: 77.6252, address: 'Jan Aushadi Medical Store, Tank Shore Rd, Bangalore' }, // Example coordinates
  { id: 4, name: 'Center 4', lat: 12.9501, lng: 77.6349, address: 'Aushadi Kendra, Jayanagar 4th Block, Bangalore' }, // Add more centers
  { id: 5, name: 'Center 5', lat: 12.9637, lng: 77.6027, address: 'Janoushadhi Kendra, KSR, Bangalore' }, // Add more centers
  { id: 6, name: 'Center 6', lat: 12.9716, lng: 77.5946, address: 'Jan Aushadi, HSR Layout, Bangalore' }, // Example coordinates
];

function maps() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Map Container (70%) */}
      <div style={{ flex: 7 }}>
        <LoadScript googleMapsApiKey="AIzaSyAsWJOsm79veZPhS8zhgASYqk-IOWnYKAo">
          <GoogleMap
            mapContainerStyle={{ height: '100%', width: '100%' }}
            zoom={12}
            center={center}
          >
            {ayurvedicCenters.map((center) => (
              <Marker
                key={center.id}
                position={{ lat: center.lat, lng: center.lng }}
                title={center.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* List of E-Aushadi Shops (30%) */}
      <div style={{ flex: 3, backgroundColor: '#f2f2f2', padding: '20px' }}>
        <h2>List of E-Aushadi Shops</h2>
        <div className="scrollable-container">
          {ayurvedicCenters.map((center) => (
            <div className="shop-container" key={center.id}>
              <h3>{center.name}</h3>
              <p>{center.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default maps;
