import React from 'react'

const UserGreeting = ({isLoggedIn, userName}) => {
    const greeting = <h1 className='greeting'>Hello {userName}</h1>;
    const prompt = <h1 className='prompt'>You need to be logged in.</h1>
  return (
        isLoggedIn ? greeting : prompt
  )
}

export default UserGreeting