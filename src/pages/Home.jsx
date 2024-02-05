import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Tempat untuk mengisi data tamu
  const guests = ["John-Doe", "Jane-Smith"];

  return (
    <div>
      {guests.map((guest, idx) => (
        <h3 key={idx}>
          <Link to={`/${guest}`}>Undangan untuk {guest.replace('-', ' ')}</Link>
        </h3>
      ))}
    </div>
  );
};

export default Home;