import React from 'react'

function Area({ area }) {
  return(
    <section>
      <h3>{area.name}</h3>
      <p>Also know as {area.shortname}</p>
      <p>{area.description}</p>
    </section>
  )
}

export default Area;
