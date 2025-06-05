'use client';

import React from 'react';
import { Button } from 'reactstrap';

const cities = [
  'Srinagar hotels', 'Jaipur hotels', 'Rishikesh hotels', 'Munnar hotels', 'Gurgaon hotels',
  'Bengaluru hotels', 'Hyderabad hotels', 'Varkala hotels', 'Mysore hotels', 'Manāli hotels',
  'Mumbai hotels', 'Puri hotels', 'Varanasi hotels', 'New Delhi hotels', 'Shimla hotels',
  'Ooty hotels', 'Puducherry hotels', 'Ayodhya hotels', 'Cochin hotels', 'Mussoorie hotels',
  'Lonavala hotels', 'Chennai hotels', 'Pune hotels', 'Udaipur hotels', 'Kolkata hotels'
];

const PopularCities = () => {
  return (
    <section className="px-4 py-5 border-top">
      <h4 className="fw-bold mb-4">Popular with travellers from India</h4>

      <div className="mb-4 d-flex gap-3">
        <Button outline color="primary" size="sm">Domestic cities</Button>
        <Button color="link" size="sm">International cities</Button>
      </div>

      <div className="d-flex flex-wrap" style={{ maxWidth: '1000px' }}>
        {cities.map((city, index) => (
          <div key={index} className="me-4 mb-2 text-primary" style={{ minWidth: '150px', cursor: 'pointer' }}>
            {city}
          </div>
        ))}
      </div>

      <div className="mt-3">
        <a href="#" className="text-primary">+ Show more</a>
      </div>
    </section>
  );
};

export default PopularCities;
