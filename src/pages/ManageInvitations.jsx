import React from "react";
import { Link } from "react-router-dom";

// Contoh daftar tamu, idealnya ini akan ditarik dari database atau API
const guestList = [
  "John-Doe",
  "Jane-Smith",
  // ... tambahkan tamu lainnya sesuai kebutuhan
];

const ManageInvitations = () => {
  return (
    <div>
      <h1>Daftar Surat Undangan</h1>
      <img src="./naruto.jpg" alt="Naruto Image" />

      <ul>
        {guestList.map((guestName, index) => (
          <li key={index}>
            {/* Buat link untuk setiap undangan */}
            <Link to={`/${guestName}`}>
              Undangan untuk {guestName.replace("-", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageInvitations;
