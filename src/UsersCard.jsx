import React from 'react';
import { useState, useEffect } from 'react';
import './css/UsersCard.css';
import Card from './components/Card';

const UsersCard = () => {

  const [users, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        setUser(data);
      });
  }, []);

  return (
    <>
      <div className="container-wrapper">

        <h1 className='title'>Users</h1>
    
        <div className="container">
          {users && <Card user={users}/>}
        </div>
        
      </div>
    </>
  )
}

export default UsersCard;