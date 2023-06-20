import React, { useState, useEffect } from 'react';
import './LocationList.css';

function LocationList() {
  const [locationCard, setLocationCard] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/locations/');
      const data = await response.json();
      console.log(data);
      setLocationCard(data.locations);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="location-container">
      {locationCard.map((location, id) => (
        <div key={id} className="location-card">
          <div className="location-card">
            <div className="location-card-body">
              <h5 className="location-card-title">
                {location}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

};
  export default LocationList;
