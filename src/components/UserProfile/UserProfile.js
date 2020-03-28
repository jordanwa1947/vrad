import React from 'react'

function UserProfile({name, travelReason}) {
  return(
    <section>
      <h2>{name}</h2>
      <p>{travelReason}</p>
    </section>
  )
}

export default UserProfile;
