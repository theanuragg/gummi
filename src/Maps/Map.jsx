import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// Add your Mapbox Access Token
mapboxgl.accessToken = import.meta.env.VITE_YOUR_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current, // Reference to the map container
      style: 'mapbox://styles/mapbox/streets-v11', // Map style
      center: [77.1025, 28.7041], // Initial map center [lng, lat]
      zoom: 9, // Initial zoom level
    });
    

    return () => map.remove(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
      }}
    ></div>
  );
};

export default Map;
