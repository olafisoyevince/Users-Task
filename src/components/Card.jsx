import React from 'react'

const Card = ({user}) => {
  return (
    <>
      {
       user.map((user) => (
        <div className="card" key={user.id}>
          <h1 className="card-title">{user.name}</h1>
          <p className="card-text">I am digital designer at {user.company.name} and I'm in love with photography, painting and discovering new worlds and cultures.</p>
          <div className='card-info'>
            <h4 className='card-info-title'>General Info</h4>
            <p>Date of Birth: <span>Aug 25, 1988</span></p>
            <p>Address: <span>{user.address.street}, {user.address.suite}, {user.address.city}</span></p>
            <p>Email: <span>{user.email.toLowerCase()}</span></p>
            <p>Phone: <span>{user.phone}</span></p>
          </div>
        </div>
       ))
      }
    </>
  )
}

export default Card;