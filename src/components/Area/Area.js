import React from 'react'
import './Area.css';

function Area({ area }) {
  return(
    <section className="area-card">
      <h3>{area.name}</h3>
      <p>Also known as {area.shortname}</p>
      <p>{area.description}</p>
      <button>View Listings</button>
    </section>
  )
}

export default Area;
