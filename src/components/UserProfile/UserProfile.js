import React from 'react'

function UserProfile({name, travelReason}) {

  function customGreeting() {
    const greetings = {
      leisure: 'Ready to have some fun!?',
      business: 'Find the cheapest, quality rentals in Denver',
      other: 'Have a great trip!'
    }
    return greetings[travelReason];
  }

  return(
    <section>
      <p>{customGreeting()}</p>
    </section>
  )
}

export default UserProfile;
